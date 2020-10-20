import { chmod as memChmod } from 'memfs'

const chmod = async (path, mode) =>
  new Promise((resolve, reject) => {
    memChmod(path, mode, (error) => {
      if (error) {
        return reject(error)
      }
      return resolve()
    })
  })

export default chmod
