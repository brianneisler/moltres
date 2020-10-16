import createPath from './createPath'
import curry from './curry'
import getProperty from './getProperty'
import isPath from './isPath'
import isString from './isString'
import isUndefined from './isUndefined'
import size from './size'

/**
 * Retrieve the value at a given selector
 *
 * @function
 * @since v0.4.3
 * @category lang
 * @param {Array|ImmutableList|String} path The path to use.
 * @param {Object} object The object to get the path in.
 * @return {Any} The value that exists at the path or undefined.
 * @example
 *
 * get(['a', 'b'], { a: { b: 2 } })
 * // => 2
 *
 * get(['a', 'b'], { c: { b: 2 } })
 * // => undefined
 *
 * get('a', { a: { b: 2 } })
 * // => { b: 2 }
 *
 * get('a.b', { a: { b: 2 } })
 * // => 2
 *
 * get('a[0]', { a: [1, 2] })
 * // => 1
 *
 * get('[0]', [1, 2])
 * // => 1
 */
const getPath = curry((path, obj) => {
  if (isString(path)) {
    path = createPath(path)
  }
  if (!isPath(path)) {
    throw new TypeError(
      `getPath expected 'path' parameter to be a Path. Instead received ${path}`
    )
  }
  let val = obj
  let idx = 0
  const length = size(path)
  while (idx < length) {
    val = getProperty(getProperty(idx, path), val)
    if (isUndefined(val)) {
      return val
    }
    idx += 1
  }
  return val
})

export default getPath
