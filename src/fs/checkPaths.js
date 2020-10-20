import { all } from '../lang'
import { isPathSubdir } from '../path'

import identicalPathStats from './identicalPathStats'
import { stat } from './util'

const bigIntStat = (file) => stat(file, { bigint: true })

const getStats = async (src, dest) =>
  all({
    destStat: bigIntStat(dest).catch((err) => {
      if (err.code === 'ENOENT') {
        return null
      }
      throw err
    }),
    srcStat: bigIntStat(src)
  })

const checkPaths = async (src, dest, funcName) => {
  const { destStat, srcStat } = await getStats(src, dest)
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

export default checkPaths
