import curry from './curry'
import equals from './equals'
import map from './map'
import where from './where'

/**
 * Takes a spec object and a test object; returns true if the test satisfies
 * the spec, false otherwise. An object satisfies the spec if, for each of the
 * spec's own properties, accessing that property of the object gives the same
 * value (in [`equals`](#equals) terms) as accessing that property of the
 * spec.
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
 *      const pred = R.whereEq({a: 1, b: 2});
 *
 *      pred({a: 1});              //=> false
 *      pred({a: 1, b: 2});        //=> true
 *      pred({a: 1, b: 2, c: 3});  //=> true
 *      pred({a: 1, b: 1});        //=> false
 */
const whereEquals = curry((spec, value) =>
  where(
    map((specValue) => equals(specValue), spec),
    value
  )
)

export default whereEquals
