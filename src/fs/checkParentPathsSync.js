import { pathDirname, pathParse, pathResolve } from '../path'

import identicalPathStats from './identicalPathStats'
import { statSync } from './util'

const checkParentPathsSync = (src, srcStat, dest, funcName) => {
  const srcParent = pathResolve(pathDirname(src))
  const destParent = pathResolve(pathDirname(dest))
  if (destParent === srcParent || destParent === pathParse(destParent).root) {
    return
  }
  let destStat
  try {
    destStat = statSync(destParent)
  } catch (err) {
    if (err.code === 'ENOENT') {
      return
    }
    throw err
  }
  if (identicalPathStats(srcStat, destStat)) {
    throw new Error(
      `Cannot ${funcName} '${src}' to a subdirectory of itself, '${dest}'.`
    )
  }
  return checkParentPathsSync(src, srcStat, destParent, funcName)
}

export default checkParentPathsSync
