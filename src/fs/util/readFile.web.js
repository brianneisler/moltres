import { readFile as memReadFile } from 'memfs'

const readFile = async (path, options) =>
  new Promise((resolve, reject) => {
    memReadFile(path, options, (error, data) => {
      if (error) {
        return reject(error)
      }
      return resolve(data)
    })
  })

export default readFile
