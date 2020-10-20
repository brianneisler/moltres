import { close, futimes, open } from './util'

const fileUtimesMillis = async (path, atime, mtime) => {
  const fd = await open(path, 'r+')
  let error
  try {
    await futimes(fd, atime, mtime)
  } catch (err) {
    error = err
  } finally {
    await close(fd)
  }
  if (error) {
    throw error
  }
}

export default fileUtimesMillis
