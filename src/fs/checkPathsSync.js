import { isPathSubdir } from '../path'

import identicalPathStats from './identicalPathStats'
import { statSync } from './util'

const bigIntStatSync = (file) => statSync(file, { bigint: true })

const getStatsSync = (src, dest) => {
  let destStat
  const srcStat = bigIntStatSync(src)
  try {
    destStat = bigIntStatSync(dest)
  } catch (err) {
    if (err.code === 'ENOENT') {
      return { destStat: null, srcStat }
    }
    throw err
  }
  return { destStat, srcStat }
}

const checkPathsSync = (src, dest, funcName) => {
  const { destStat, srcStat } = getStatsSync(src, dest)
  if (destStat && identicalPathStats(srcStat, destStat)) {
    throw new Error('Source and destination must not be the same.')
  }
  if (srcStat.isDirectory() && isPathSubdir(src, dest)) {
    throw new Error(
      `Cannot ${funcName} '${src}' to a subdirectory of itself, '${dest}'.`
    )
  }
  return { destStat, srcStat }
}

export default checkPathsSync
