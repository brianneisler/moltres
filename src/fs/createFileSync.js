import { pathDirname } from '../path'

import ensureDirectorySync from './ensureDirectorySync'
import { readdirSync, statSync, writeFileSync } from './util'

const createFileSync = (file) => {
  let stats
  try {
    stats = statSync(file)
  } catch {}
  if (stats && stats.isFile()) {
    return
  }

  const dir = pathDirname(file)
  try {
    if (!statSync(dir).isDirectory()) {
      // parent is not a directory
      // This is just to cause an internal ENOTDIR error to be thrown
      readdirSync(dir)
    }
  } catch (error) {
    // If the stat call above failed because the directory doesn't exist, create it
    if (error && error.code === 'ENOENT') {
      ensureDirectorySync(dir)
    } else {
      throw error
    }
  }

  writeFileSync(file, '')
}

export default createFileSync
