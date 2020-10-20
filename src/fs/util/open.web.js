import { open as memOpen } from 'memfs'

const open = async (path, flags, mode) =>
  new Promise((resolve, reject) => {
    memOpen(path, flags, mode, (error, fd) => {
      if (error) {
        return reject(error)
      }
      return resolve(fd)
    })
  })

export default open
