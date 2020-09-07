import defn from './defn'
import getPath from './getPath'
import isFunction from './isFunction'
import isPath from './isPath'
import isString from './isString'
import isUndefined from './isUndefined'

/**
 * Retrieve the value at a given path.
 *
 * Paths can be defined by a string an array. The path parameter also accepts a function that will be used as a selector against the data.
 *
 *
 *
 * @function
 * @since v0.0.3
 * @category data
 * @param {Array|string|number|Function} path The path to use.
 * @param {Object} value The value to retrieve the nested property from.
 * @returns {*} The data at `path`.
 * @example
 *
 * get(['a', 'b'], {a: {b: 2}})
 * //=> 2
 *
 * get(['a', 'b'], {c: {b: 2}})
 * //=> undefined
 *
 * get('a', {a: {b: 2}})
 * //=> { b: 2 }
 *
 * get('a.b', {a: {b: 2}})
 * //=> 2
 *
 * get('a[0]', {a: [ 1, 2 ]})
 * //=> 1
 *
 * get('[0]', [ 1, 2 ])
 * //=> 1
 */
const get = defn('get', (selector, value) => {
  if (isUndefined(selector)) {
    return value
  }
  if (isFunction(selector)) {
    return selector(value)
  }
  if (!isPath(selector) && !isString(selector)) {
    selector = [selector]
  }
  return getPath(selector, value)
})

export default get
