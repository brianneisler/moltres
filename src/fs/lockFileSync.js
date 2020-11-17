import { closeSync, filetime, openSync, statSync } from './util'

const lockFileSync = async (path, options = {}) => {
  const req = options.req || 0

  let fd
  try {
    fd = openSync(path, 'wx')
  } catch (er) {
    if (er.code !== 'EEXIST') {
      return retryThrow(path, options, er)
    }

    if (options.stale) {
      const st = statSync(path)
      const ct = st[filetime()].getTime()
      if (!(ct % 1000) && options.stale % 1000) {
        // probably don't have subsecond resolution.
        // round up the staleness indicator.
        // Yes, this will be wrong 1/1000 times on platforms
        // with subsecond stat precision, but that's acceptable
        // in exchange for not mistakenly removing locks on
        // most other systems.
        options.stale = 1000 * Math.ceil(options.stale / 1000)
      }
      const age = Date.now() - ct
      if (age > options.stale) {
        exports.unlockSync(path)
        return exports.lockSync(path, options)
      }
    }

    // failed to lock!
    return retryThrow(path, options, er)
  } finally {
    closeSync(fd)
  }
}

function retryThrow(path, opts, er) {
  if (typeof opts.retries === 'number' && opts.retries > 0) {
    const newRT = opts.retries - 1
    opts.retries = newRT
    return exports.lockSync(path, opts)
  }
  throw er
}

export default lockFileSync
