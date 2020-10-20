import { readdir as memReaddir } from 'memfs'

const readdir = async (path, options) =>
  new Promise((resolve, reject) => {
    memReaddir(path, options, (error, files) => {
      if (error) {
        return reject(error)
      }
      return resolve(files)
    })
  })

export default readdir
