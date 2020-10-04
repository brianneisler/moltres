import assoc from './assoc'
import createPath from './createPath'
import dissocProperty from './dissocProperty'
import first from './first'
import getProperty from './getProperty'
import isNil from './isNil'
import isString from './isString'
import size from './size'
import tail from './tail'

/**
 * Makes a shallow clone of an object, removing the specified property. Note that this copies and flattens prototype properties onto the new object as well. All non-primitive properties are copied by reference.
 *
 * Supports path based property selectors 'foo.bar'.
 *
 * @function
 * @since v0.3.0
 * @category lang
 * @param {Array | String} selector The property path to delete
 * @param {Any} collection The collection to clone and remove the given property from
 * @returns {Any} A new collection equivalent to the original except for the property removed
 * @example
 *
 * dissocPath(['a'], {a: 1, b: 2})
 * //=> { b: 2 }
 *
 * dissocPath('c.d', {a: 1, b: 2, c: { d: 3 }})
 * //=> {a: 1, b: 2}
 *
 * dissocPath([ 'c', 'd' ],{a: 1, b: 2, c: { d: 3 }})
 * //=> {a: 1, b: 2}
 */
const dissocPath = (path, collection) => {
  if (isString(path)) {
    path = createPath(path)
  }
  if (size(path) === 0) {
    return collection
  }

  const part = first(path)
  if (size(path) === 1) {
    return dissocProperty(part, collection)
  }

  const rest = tail(path)
  const nextValue = getProperty(part, collection)
  if (isNil(nextValue)) {
    return collection
  }
  return assoc(part, dissocPath(rest, nextValue), collection)
}

export default dissocPath
