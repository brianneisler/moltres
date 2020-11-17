import { close, fstat, open } from './util'

// if the file can be opened in readonly mode, then it's there.
// if the error is something other than ENOENT, then it's not.
const isFileLocked = async (path, options = {}) => {
  const lockPath = `${path}.lock`
  let fd
  try {
    fd = await open(lockPath, 'r')
    if (!options.stale) {
      return true
    }

    const stat = await fstat(fd)
    const age = Date.now() - stat[exports.filetime].getTime()
    return age <= options.stale
  } catch (error) {
    if (error.code !== 'ENOENT') {
      throw error
    }
    return false
  } finally {
    if (fd) {
      await close(fd)
    }
  }
}

export default isFileLocked
