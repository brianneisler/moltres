import { pathDirname } from '../path'

import ensureDirectory from './ensureDirectory'
import pathExists from './pathExists'
import { writeFile } from './util'

const outputFile = async (file, data, encoding = 'utf8') => {
  const dir = pathDirname(file)
  const exists = await pathExists(dir)

  if (exists) {
    return writeFile(file, data, encoding)
  }

  await ensureDirectory(dir)
  return writeFile(file, data, encoding)
}

export default outputFile
