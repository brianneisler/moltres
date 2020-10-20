import { writeFile as memWriteFile } from 'memfs'

const writeFile = async (file, data, options) =>
  new Promise((resolve, reject) => {
    memWriteFile(file, data, options, (error) => {
      if (error) {
        return reject(error)
      }
      return resolve()
    })
  })

export default writeFile
