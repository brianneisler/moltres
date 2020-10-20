import { Path } from './constants'
import pathResolve from './pathResolve'

/**
 * return true if `dest` is a subdir of `path`, otherwise false.
 * NOTE: It only checks the path strings.
 *
 * @function
 * @since v0.5.0
 * @category path
 * @param {String} path The path to check
 * @param {String} dest The destination path to compare against
 * @returns {Boolean} returns true if `dest` is a subdir of `path`
 */
const isPathSubdir = (path, dest) => {
  const pathArr = pathResolve(path)
    .split(Path.SEPARATOR)
    .filter((i) => i)
  const destArr = pathResolve(dest)
    .split(Path.SEPARATOR)
    .filter((i) => i)

  return pathArr.reduce((acc, cur, i) => acc && destArr[i] === cur, true)
}

export default isPathSubdir
