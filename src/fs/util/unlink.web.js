import { unlink as memUnlink } from 'memfs'

const unlink = async (path) =>
  new Promise((resolve, reject) => {
    memUnlink(path, (error) => {
      if (error) {
        return reject(error)
      }
      return resolve()
    })
  })

export default unlink
