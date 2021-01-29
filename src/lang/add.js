import { Number } from './classes'
import curry from './curry'

/**
 * Converts two values into Numbers and then adds them together.
 *
 * @function
 * @since v0.6.0
 * @category lang
 * @param {*} valueA The first value
 * @param {*} valueB the second value to add to the first
 * @returns {Number} The sum of valueA and valueB
 * @example
 *
 * add(2, 3)
 * //=>  5
 *
 * add(7)(10)
 * //=> 17
 *
 * add(2.2, 3.2)
 * // => 5.4
 *
 * add('2', '3')
 * // => 5
 */
const add = curry((valueA, valueB) => Number(valueA) + Number(valueB))

export default add
