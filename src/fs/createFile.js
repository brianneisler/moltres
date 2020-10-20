import { pathDirname } from '../path'

import ensureDirectory from './ensureDirectory'
import { readdir, stat, writeFile } from './util'

const createFile = async (file) => {
  let stats
  try {
    stats = await stat(file)
  } catch {}
  if (stats && stats.isFile()) {
    return
  }
  const dir = pathDirname(file)

  try {
    stats = await stat(dir)
    if (!stats.isDirectory()) {
      // parent is not a directory
      // This is just to cause an internal ENOTDIR error to be thrown
      await readdir(dir)
    }
  } catch (error) {
    // If the stat call above failed because the directory doesn't exist, create it
    if (error && error.code === 'ENOENT') {
      await ensureDirectory(dir)
    } else {
      throw error
    }
  }

  return writeFile(file, '')
}

export default createFile
