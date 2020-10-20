import { symlink as memSymlink } from 'memfs'

const symlink = async (target, path, type) =>
  new Promise((resolve, reject) => {
    memSymlink(target, path, type, (error) => {
      if (error) {
        return reject(error)
      }
      return resolve()
    })
  })

export default symlink
