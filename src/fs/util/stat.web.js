import { stat as memStat } from 'memfs'

const stat = async (path, options) =>
  new Promise((resolve, reject) => {
    memStat(path, options, (error, stats) => {
      if (error) {
        return reject(error)
      }
      return resolve(stats)
    })
  })

export default stat
