import append from './append'
import curry from './curry'
import getProperty from './getProperty'
import isObject from './isObject'
import pipe from './pipe'
import resolve from './resolve'
import size from './size'
import toPath from './toPath'
import walk from './walk'

const reduceWalkee = (iteratee, pathParts, accum, value, keys, recur) =>
  pipe(
    (result) => iteratee(result, value, keys),
    (result) => {
      const resolvedValue = resolve(value)
      if (size(pathParts) > size(keys) && isObject(resolvedValue)) {
        const nextKey = getProperty(keys.length, pathParts)
        const newKeys = append(nextKey, keys)
        value = resolve(value)
        return recur(
          iteratee,
          pathParts,
          result,
          resolvedValue[nextKey],
          newKeys
        )
      }
      return result
    }
  )(accum)

/**
 * Walk reduce the specific path using the given reducer function
 *
 * NOTE: This method will resolve values during the walk before walking them. However, the unresolved value will be delivered to the iteratee.
 *
 * @function
 * @since v0.0.6
 * @category data
 * @param {*} path The specific path to walk
 * @param {Function} fn The iterator function. Receives three values, the accumulator and the current element from the walk and the current set of keys from the entire depth of the walk.
 * @param {*} accum The accumulator value.
 * @param {*} collection The collection to walk.
 * @returns {*} The final, accumulated value.
 * @example
 *
 * walkReducePath(
 *   (accum, value, keys) => {
 *     return accum.push(keys)
 *   },
 *   'a.c.d'
 *   [],
 *   {
 *     a: {
 *       b: 'b',
 *       c: {
 *         d: 'd'
 *       }
 *     },
 *     e: [ 'e', 'f' ]
 *   }
 * )
 * //=> [
 * //   [],
 * //   ['a'],
 * //   ['a', 'c'],
 * //   ['a', 'c', 'd']
 * // ]
 */
const walkReducePath = curry((iteratee, path, accum, collection) =>
  walk(reduceWalkee, iteratee, toPath(path), accum, collection, [])
)

export default walkReducePath
