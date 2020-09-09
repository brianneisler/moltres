import { defn } from '../lang'

import lstat from './lstat'

const fileExists = defn('fileExists', async (filePath) => {
  try {
    const stats = await lstat(filePath)
    return stats.isFile()
  } catch (error) {
    return false
  }
})

export default fileExists
