import { mkdir as memMkdir } from 'memfs'

const mkdir = async (path, options) =>
  new Promise((resolve, reject) => {
    memMkdir(path, options, (error, result) => {
      if (error) {
        return reject(error)
      }
      return resolve(result)
    })
  })

export default mkdir
