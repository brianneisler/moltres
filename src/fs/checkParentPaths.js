import { pathDirname, pathParse, pathResolve } from '../path'

import identicalPathStats from './identicalPathStats'
import { stat } from './util'

/**
 * recursively check if dest parent is a subdirectory of src.
 * It works for all file types including symlinks since it
 * checks the src and dest inodes. It starts from the deepest
 * parent and stops once it reaches the src parent or the root path.
 *
 * @function
 * @since v0.5.0
 * @category fs
 * @param {string} src The src path
 * @param {string} dest The dest path
 * @returns {undefined}
 */
const checkParentPaths = async (src, srcStat, dest, funcName) => {
  const srcParent = pathResolve(pathDirname(src))
  const destParent = pathResolve(pathDirname(dest))
  if (destParent === srcParent || destParent === pathParse(destParent).root) {
    return
  }

  try {
    const destStat = await stat(destParent, { bigint: true })
    if (identicalPathStats(srcStat, destStat)) {
      throw new Error(`Cannot ${funcName} '${src}' to a subdirectory of itself, '${dest}'.`)
    }
    return checkParentPaths(src, srcStat, destParent, funcName)
  } catch (error) {
    if (error.code === 'ENOENT') {
      return
    }
    throw error
  }
}

export default checkParentPaths
