import { defn } from '../lang'

import lstatSync from './lstatSync'

const fileExistsSync = defn('fileExistsSync', (filePath) => {
  try {
    const stats = lstatSync(filePath)
    return stats.isFile()
  } catch (error) {
    return false
  }
})

export default fileExistsSync
