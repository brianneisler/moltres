import { defaultTo, isFunction } from '../lang'
import { isPathSubdir, pathDirname, pathResolve } from '../path'

import checkParentPaths from './checkParentPaths'
import checkPaths from './checkPaths'
import copyDirectory from './copyDirectory'
import copyLink from './copyLink'
import ensureDirectory from './ensureDirectory'
import pathExists from './pathExists'
import {
  chmod,
  copyFile,
  lstat,
  mkdir,
  readlink,
  stat,
  symlink,
  unlink
} from './util'

const mayCopyFile = async (srcStat, src, dest, options) => {
  if (options.overwrite) {
    await unlink(dest)
    return copyFile(srcStat, src, dest, options)
  } else if (options.errorOnExist) {
    throw new Error(`'${dest}' already exists`)
  }
}

const mkDirAndCopy = async (srcMode, src, dest, options) => {
  await mkdir(dest)
  await copyDirectory(src, dest, options)
  return chmod(dest, srcMode)
}

const getStats = async (destStat, src, dest, options) => {
  let srcStat
  if (options.dereference) {
    srcStat = await stat(src)
  } else {
    srcStat = await lstat
  }

  if (srcStat.isDirectory()) {
    if (!destStat) {
      return mkDirAndCopy(srcStat.mode, src, dest, options)
    }
    if (destStat && !destStat.isDirectory()) {
      throw new Error(
        `Cannot overwrite non-directory '${dest}' with directory '${src}'.`
      )
    }
    return copyDirectory(src, dest, options)
  } else if (
    srcStat.isFile() ||
    srcStat.isCharacterDevice() ||
    srcStat.isBlockDevice()
  ) {
    if (!destStat) {
      return copyFile(srcStat, src, dest, options)
    }
    return mayCopyFile(srcStat, src, dest, options)
  } else if (srcStat.isSymbolicLink()) {
    let resolvedSrc = await readlink(src)

    if (options.dereference) {
      resolvedSrc = pathResolve(process.cwd(), resolvedSrc)
    }

    if (!destStat) {
      return symlink(resolvedSrc, dest)
    }
    try {
      let resolvedDest = await readlink(dest)
      if (options.dereference) {
        resolvedDest = pathResolve(process.cwd(), resolvedDest)
      }
      if (isPathSubdir(resolvedSrc, resolvedDest)) {
        throw new Error(
          `Cannot copy '${resolvedSrc}' to a subdirectory of itself, '${resolvedDest}'.`
        )
      }

      // do not copy if src is a subdir of dest since unlinking
      // dest in this case would result in removing src contents
      // and therefore a broken symlink would be created.
      if (destStat.isDirectory() && isPathSubdir(resolvedDest, resolvedSrc)) {
        throw new Error(
          `Cannot overwrite '${resolvedDest}' with '${resolvedSrc}'.`
        )
      }
      return copyLink(resolvedSrc, dest)
    } catch (error) {
      // dest exists and is a regular file or directory,
      // Windows may throw UNKNOWN error. If dest already exists,
      // fs throws error anyway, so no need to guard against it here.
      if (error.code === 'EINVAL' || error.code === 'UNKNOWN') {
        return symlink(resolvedSrc, dest)
      }
      throw error
    }
  }
}

const startCopy = async (destStat, src, dest, options) => {
  if (options.filter) {
    const include = await options.filter(src, dest)
    if (!include) {
      return
    }
  }
  return getStats(destStat, src, dest, options)
}

const checkParentDir = async (destStat, src, dest, options) => {
  const destParent = pathDirname(dest)
  const dirExists = await pathExists(destParent)

  if (!dirExists) {
    await ensureDirectory(destParent)
  }
  return startCopy(destStat, src, dest, options)
}

const copyPath = async (src, dest, options = {}) => {
  if (isFunction(options)) {
    options = { filter: options }
  }

  options.clobber = defaultTo(true, options.clobber) // default to true for now
  options.overwrite = defaultTo(options.clobber, options.overwrite) // overwrite falls back to clobber

  // Warn about using preserveTimestamps on 32-bit node
  if (options.preserveTimestamps && process.arch === 'ia32') {
    // eslint-disable-next-line no-console
    console.warn(`fs-extra: Using the preserveTimestamps option in 32-bit node is not recommended;\n
    see https://github.com/jprichardson/node-fs-extra/issues/269`)
  }

  const { destStat, srcStat } = await checkPaths(src, dest, 'copy')
  await checkParentPaths(src, srcStat, dest, 'copy')

  if (options.filter) {
    const include = await options.filter(src, dest)
    if (!include) {
      return
    }
  }
  return checkParentDir(destStat, src, dest, options)
}

export default copyPath
