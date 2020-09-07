import allWith from './allWith'
import assocIndex from './assocIndex'
import assocKey from './assocKey'
import assocProperty from './assocProperty'
import curry from './curry'
import dispatchable from './dispatchable'
import satisfiesIndexed from './satisfiesIndexed'
import satisfiesKeyed from './satisfiesKeyed'
import satisfiesPropertied from './satisfiesPropertied'

const baseAssoc = (selector, value, collection) => {
  if (satisfiesIndexed(collection)) {
    return assocIndex(selector, value, collection)
  }
  if (satisfiesKeyed(collection)) {
    return assocKey(selector, value, collection)
  }
  if (satisfiesPropertied(collection)) {
    return assocProperty(selector, value, collection)
  }
  throw new Error(`Cannot assoc to the given collection ${collection}`)
}

const dispatchableAssoc = dispatchable('assoc', baseAssoc)

/**
 * Makes a shallow clone of an object, setting or overriding the specified property with the given value. Note that this copies and flattens prototype properties onto the new object as well. All non-primitive properties are copied by reference.
 *
 * Supports path based property selectors 'foo.bar' and functional selectors which performs an over on the entire collection and sets each matching selector to the given value.
 *
 * @function
 * @since v0.3.0
 * @category lang
 * @param {Array | String | Function} selector The property path to set or functional selector
 * @param {Any} value The new value
 * @param {Any} collection The collection to clone and assign the new value
 * @returns {Any} A new collection equivalent to the original except for the changed selector path.
 * @example
 *
 * assoc('c', 3, {a: 1, b: 2})          //=> {a: 1, b: 2, c: 3}
 * assoc('c.d', 3, {a: 1, b: 2})        //=> {a: 1, b: 2, c: { d: 3 }}
 * assoc([ 'c', 'd' ], 3, {a: 1, b: 2}) //=> {a: 1, b: 2, c: { d: 3 }}
 */
const assoc = curry((selector, value, collection) =>
  allWith(
    ([resolvedSelector, resolvedCollection]) =>
      dispatchableAssoc(resolvedSelector, value, resolvedCollection),
    [selector, collection]
  )
)

export default assoc
