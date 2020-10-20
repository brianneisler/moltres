import { closeSync, futimesSync, openSync } from './util'

const fileUtimesMillisSync = (path, atime, mtime) => {
  const fd = openSync(path, 'r+')
  futimesSync(fd, atime, mtime)
  return closeSync(fd)
}

export default fileUtimesMillisSync
