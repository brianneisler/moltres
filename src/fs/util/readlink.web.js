import { realink as memReadlink } from 'memfs'

const readlink = async (path, options) =>
  new Promise((resolve, reject) => {
    memReadlink(path, options, (error, linkString) => {
      if (error) {
        return reject(error)
      }
      return resolve(linkString)
    })
  })

export default readlink
