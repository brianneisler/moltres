import { access as memAccess } from 'memfs'

const access = async (path, mode) =>
  new Promise((resolve, reject) => {
    memAccess(path, mode, (error) => {
      if (error) {
        return reject(error)
      }
      return resolve()
    })
  })

export default access
