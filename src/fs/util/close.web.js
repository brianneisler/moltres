import { close as memClose } from 'memfs'

const close = async (fd) =>
  new Promise((resolve, reject) => {
    memClose(fd, (error) => {
      if (error) {
        return reject(error)
      }
      return resolve()
    })
  })

export default close
