import { copyFile as memCopyFile } from 'memfs'

const copyFile = async (src, dest, mode) =>
  new Promise((resolve, reject) => {
    memCopyFile(src, dest, mode, (error) => {
      if (error) {
        return reject(error)
      }
      return resolve()
    })
  })

export default copyFile
