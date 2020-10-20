import { futimes as memFutimes } from 'memfs'

const futimes = async (fd, atime, mtime) =>
  new Promise((resolve, reject) => {
    memFutimes(fd, atime, mtime, (error) => {
      if (error) {
        return reject(error)
      }
      return resolve()
    })
  })

export default futimes
