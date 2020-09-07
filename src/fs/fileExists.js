import fs from 'fs-extra'

import { defn } from '../lang'

const fileExists = defn(async (filePath) => {
  try {
    const stats = await fs.lstat(filePath)
    return stats.isFile()
  } catch (error) {
    return false
  }
})

export default fileExists
