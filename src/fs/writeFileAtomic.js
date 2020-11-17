import { pathResolve } from '../path'
import { getWorkerId } from '../worker'

import { stat, unlinkSync } from './util'

const fs = require('fs')

const MurmurHash3 = require('imurmurhash')
const isTypedArray = require('is-typedarray')
const onExit = require('signal-exit')
const typedArrayToBuffer = require('typedarray-to-buffer')

const activeFiles = {}

let invocations = 0
function getTempFilename(filename) {
  return (
    filename +
    '.' +
    MurmurHash3(__filename)
      .hash(String(process.pid))
      .hash(String(getWorkerId()))
      .hash(String(++invocations))
      .result()
  )
}

function cleanupOnExit(tmpfile) {
  return () => {
    try {
      fs.unlinkSync(typeof tmpfile === 'function' ? tmpfile() : tmpfile)
    } catch (_) {}
  }
}

function serializeActiveFile(absoluteName) {
  return new Promise((resolve) => {
    // make a queue if it doesn't already exist
    if (!activeFiles[absoluteName]) {
      activeFiles[absoluteName] = []
    }

    activeFiles[absoluteName].push(resolve) // add this job to the queue
    if (activeFiles[absoluteName].length === 1) {
      resolve()
    } // kick off the first one
  })
}

// https://github.com/isaacs/node-graceful-fs/blob/master/polyfills.js#L315-L342
const isChownErrOk = (err) => {
  if (err.code === 'ENOSYS') {
    return true
  }

  const nonroot = !process.getuid || process.getuid() !== 0
  if (nonroot) {
    if (err.code === 'EINVAL' || err.code === 'EPERM') {
      return true
    }
  }

  return false
}

const writeFileAtomic = async (filename, data, options = {}) => {
  if (typeof options === 'string') {
    options = { encoding: options }
  }

  let fd
  let tmpfile
  /* istanbul ignore next -- The closure only gets called when onExit triggers */
  const removeOnExitHandler = onExit(cleanupOnExit(() => tmpfile))
  const absoluteName = pathResolve(filename)

  try {
    await serializeActiveFile(absoluteName)
    const truename = await promisify(fs.realpath)(filename).catch(
      () => filename
    )
    tmpfile = getTempFilename(truename)

    if (!options.mode || !options.chown) {
      // Either mode or chown is not explicitly set
      // Default behavior is to copy it from original file
      const stats = await promisify(fs.stat)(truename).catch(() => {})
      if (stats) {
        if (options.mode == null) {
          options.mode = stats.mode
        }

        if (options.chown == null && process.getuid) {
          options.chown = { gid: stats.gid, uid: stats.uid }
        }
      }
    }

    fd = await promisify(fs.open)(tmpfile, 'w', options.mode)
    if (options.tmpfileCreated) {
      await options.tmpfileCreated(tmpfile)
    }
    if (isTypedArray(data)) {
      data = typedArrayToBuffer(data)
    }
    if (Buffer.isBuffer(data)) {
      await promisify(fs.write)(fd, data, 0, data.length, 0)
    } else if (data != null) {
      await promisify(fs.write)(
        fd,
        String(data),
        0,
        String(options.encoding || 'utf8')
      )
    }

    if (options.fsync !== false) {
      await promisify(fs.fsync)(fd)
    }

    await promisify(fs.close)(fd)
    fd = null

    if (options.chown) {
      await promisify(fs.chown)(
        tmpfile,
        options.chown.uid,
        options.chown.gid
      ).catch((err) => {
        if (!isChownErrOk(err)) {
          throw err
        }
      })
    }

    if (options.mode) {
      await promisify(fs.chmod)(tmpfile, options.mode).catch((err) => {
        if (!isChownErrOk(err)) {
          throw err
        }
      })
    }

    await promisify(fs.rename)(tmpfile, truename)
  } finally {
    if (fd) {
      await promisify(fs.close)(fd).catch(
        /* istanbul ignore next */
        () => {}
      )
    }
    removeOnExitHandler()
    await promisify(fs.unlink)(tmpfile).catch(() => {})
    activeFiles[absoluteName].shift() // remove the element added by serializeSameFile
    if (activeFiles[absoluteName].length > 0) {
      activeFiles[absoluteName][0]() // start next job if one is pending
    } else {
      delete activeFiles[absoluteName]
    }
  }
}

export default writeFileAtomic
