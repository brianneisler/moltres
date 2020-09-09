import allWith from './allWith'
import assocPath from './assocPath'
import curry from './curry'
import isPath from './isPath'
import isString from './isString'

/**
 * This method is an alias for `assoc`
 *
 * Makes a shallow clone of an object, setting or overriding the specified property with the given value. Note that this copies and flattens prototype properties onto the new object as well. All non-primitive properties are copied by reference.
 *
 * Supports path based property selectors 'foo.bar' and functional selectors which performs an 'over' on the entire collection and sets each matching selector to the given value.
 *
 * dispatches to the `set` method of the 3rd argument if available
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
 * set('c', 3, {a: 1, b: 2})          //=> {a: 1, b: 2, c: 3}
 * set('c.d', 3, {a: 1, b: 2})        //=> {a: 1, b: 2, c: { d: 3 }}
 * set([ 'c', 'd' ], 3, {a: 1, b: 2}) //=> {a: 1, b: 2, c: { d: 3 }}
 */
// NOTE BRN: We use curry here instead of defn because there are data
// implementations where we don't want to directly dispatch to .set. The Sutter
// implementation will fix this once we can switch to that
const set = curry((selector, value, collection) =>
  allWith(
    ([resolvedSelector, resolvedCollection]) => {
      if (!isPath(resolvedSelector) && !isString(resolvedSelector)) {
        resolvedSelector = [resolvedSelector]
      }
      return assocPath(resolvedSelector, value, resolvedCollection)
    },
    [selector, collection]
  )
)

export default set
