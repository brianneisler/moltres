import createPath from './createPath'
import curry from './curry'
import getProperty from './getProperty'
import hasProperty from './hasProperty'
import isNil from './isNil'
import isPath from './isPath'
import isString from './isString'
import isSymbol from './isSymbol'
import size from './size'

/**
 * Returns whether or not a path exists in an object. Only the object's
 * own properties are checked.
 *
 * @function
 * @since v0.4.3
 * @category lang
 * @param {Array|ImmutableList|String} path The path to use.
 * @param {Object} object The object to check the path in.
 * @return {Boolean} Whether the path exists.
 * @example
 *
 *      hasPath(['a', 'b'], {a: {b: 2}})         // => true
 *      hasPath(['a', 'b'], {a: {b: undefined}}) // => true
 *      hasPath(['a', 'b'], {a: {c: 2}})         // => false
 *      hasPath(['a', 'b'], {})                  // => false
 */
const hasPath = curry((path, obj) => {
  if (isString(path) || isSymbol(path)) {
    path = createPath(path)
  }
  if (!isPath(path)) {
    throw new TypeError(
      `getPath expected 'path' parameter to be a Path. Instead received ${path}`
    )
  }
  if (path.length === 0 || isNil(obj)) {
    return false
  }
  let val = obj
  let idx = 0
  const length = size(path)
  while (idx < length) {
    if (!isNil(val) && hasProperty(getProperty(idx, path), val)) {
      val = getProperty(getProperty(idx, path), val)
      idx += 1
    } else {
      return false
    }
  }
  return true
})

export default hasPath
