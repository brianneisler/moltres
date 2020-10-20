import { pathDirname } from '../path'

import ensureDirectorySync from './ensureDirectorySync'
import { existsSync, writeFileSync } from './util'

const outputFileSync = (file, ...args) => {
  const dir = pathDirname(file)
  if (existsSync(dir)) {
    return writeFileSync(file, ...args)
  }
  ensureDirectorySync(dir)
  writeFileSync(file, ...args)
}

export default outputFileSync
