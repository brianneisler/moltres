import curry from './curry'
import isArray from './isArray'
import isFunction from './isFunction'
import isIterator from './isIterator'
import isObject from './isObject'
import iterate from './iterate'
import resolveWith from './resolveWith'

/**
 * Resolves all async values in an array or object
 *
 * Auto curried for placeholder support.
 *
 * @function
 * @since v0.0.6
 * @category lang
 * @param {*} value The array or object whose values should be resolved. If value is not an object or array, the value is simply resolved to itself
 * @returns {*} The array or object with its values resolved
 * @example
 *
 * const nums = [
 *   1,
 *   Promise.resolve(2),
 *   (async () => 3)()
 * ]
 * await all(nums) //=> [ 1, 2, 3 ]
 *
 * const keyed = {
 *   a: 1,
 *   b: Promise.resolve(2),
 *   c: (async () => 3)()
 * }
 * await all(keyed) //=> { a: 1, b: 2, c: 3 }
 *
 * await all('abc') //=> 'abc'
 * await all(123) //=> 123
 */
const all = curry(
  resolveWith((value) => {
    // TODO BRN :When this method receives an empty Array or empty anything, it
    // will not return a Promise so anything attaching using .then will break
    let result
    if (isArray(value) || isIterator(value)) {
      result = []
    } else if (isObject(value) && !isFunction(value)) {
      result = {}
    } else {
      return value
    }

    return iterate((next) => {
      if (next.done) {
        return {
          ...next,
          value: result
        }
      }
      return resolveWith((nextValue) => {
        result[next.kdx] = nextValue
        return next
      }, next.value)
    }, value)
  })
)

export default all
