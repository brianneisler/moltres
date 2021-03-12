import add from './add'
import reduce from './reduce'

/**
 * Adds together all the elements of a list.
 *
 * @function
 * @since v0.1.0
 * @category utils.lang
 * @param {Array} list An array of numbers
 * @return {Number} The sum of all the numbers in the list.
 * @example
 *
 * sum([2,4,6,8,100,1])
 * //=> 121
 */
const sum = reduce(add, 0)

export default sum
