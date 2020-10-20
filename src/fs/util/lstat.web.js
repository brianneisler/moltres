import { lstat as memLstat } from 'memfs'

const lstat = async (path, options) =>
  new Promise((resolve, reject) => {
    memLstat(path, options, (error, stats) => {
      if (error) {
        return reject(error)
      }
      return resolve(stats)
    })
  })

export default lstat
