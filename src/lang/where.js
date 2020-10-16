import curry from './curry'
import getPath from './getPath'
import hasPath from './hasPath'
import isObject from './isObject'
import iterate from './iterate'
import resolveWith from './resolveWith'

/**
 * Takes a spec object and a test object; returns true if the test satisfies
 * the spec. Each of the spec's own properties must be a predicate function.
 * Each predicate is applied to the value of the corresponding property of the
 * test object. `where` returns true if all the predicates return true, false
 * otherwise.
 *
 * `where` is well suited to declaratively expressing constraints for other
 * functions such as [`filter`](#filter) and [`find`](#find).
 *
 * @function
 * @since v0.4.3
 * @category lang
 * @param {Object} spec
 * @param {Any} value
 * @return {Boolean}
 * @example
 *
 *      // pred :: Object -> Boolean
 *      const pred = where({
 *        a: equals('foo'),
 *        b: complement(equals('bar')),
 *        x: gt(__, 10),
 *        y: lt(__, 20)
 *      });
 *
 *      pred({a: 'foo', b: 'xxx', x: 11, y: 19}); //=> true
 *      pred({a: 'xxx', b: 'xxx', x: 11, y: 19}); //=> false
 *      pred({a: 'foo', b: 'bar', x: 11, y: 19}); //=> false
 *      pred({a: 'foo', b: 'xxx', x: 10, y: 19}); //=> false
 *      pred({a: 'foo', b: 'xxx', x: 11, y: 20}); //=> false
 */
const where = curry((spec, value) => {
  if (!isObject(value)) {
    return false
  }
  return iterate((next) => {
    if (next.done) {
      return {
        ...next,
        value: true
      }
    }
    if (!hasPath(next.kdx, value)) {
      return {
        ...next,
        done: true,
        value: false
      }
    }
    return resolveWith((nextValue) => {
      if (!next.value(nextValue)) {
        return {
          ...next,
          done: true,
          value: false
        }
      }
      return next
    }, getPath(next.kdx, value))
  }, spec)
})

export default where
