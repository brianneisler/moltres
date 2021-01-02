import { closeSync, fstatSync, openSync } from './util'

const isFileLockedSync = (path, options = {}) => {
  const lockPath = `${path}.lock`
  let fd
  try {
    fd = openSync(lockPath, 'r')
    if (!options.stale) {
      return true
    }

    const stat = fstatSync(fd)
    const age = Date.now() - stat[exports.filetime].getTime()
    return age <= options.stale
  } catch (error) {
    if (error.code !== 'ENOENT') {
      throw error
    }
    return false
  } finally {
    if (fd) {
      closeSync(fd)
    }
  }
}

export default isFileLockedSync
