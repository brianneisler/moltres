import defn from './defn'
import getParentPath from './getParentPath'
import isArray from './isArray'
import isFunction from './isFunction'
import isUndefined from './isUndefined'
import toPath from './toPath'

/**
 * Retrieve the parent value from a given path. The parent value is the value immediately before the last path part.
 *
 * Paths can be defined by a string an array. The path parameter also accepts a function that will be used as a selector against the data.
 *
 * @function
 * @since v0.3.0
 * @category lang
 * @param {Array|String|Number|Function} path The path to use.
 * @param {Object} value The value to retrieve the parent property value from.
 * @returns {Any} The data at `path`.
 * @example
 *
 * getParent(['a', 'b'], {a: {b: 2}})
 * //=> {b: 2}
 *
 * getParent(['a', 'b'], {c: {b: 2}})
 * //=> undefined
 *
 * getParent('a', {a: {b: 2}})
 * //=> {a: {b: 2}}
 *
 * getParent('a.b', {a: {b: 2}})
 * //=> {b: 2}
 *
 * getParent('a[0]', {a: [ 1, 2 ]})
 * //=> [ 1, 2 ]
 */
const getParent = defn('getParent', (selector, value) => {
  if (isUndefined(selector)) {
    return undefined // has no parent since there's no path parts
  }
  if (isFunction(selector)) {
    return selector(value)
  }
  let parts = selector
  if (!isArray(selector)) {
    parts = toPath(selector, value)
  }
  return getParentPath(parts, value)
})

export default getParent
