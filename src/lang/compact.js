import defn from './defn'
import isNil from './isNil'
import reject from './reject'

/**
 * Creates an array with all nil values removed.
 *
 * @function
 * @since v0.0.10
 * @category data
 * @param {Array} array The array to compact.
 * @returns {Array} Returns the new array of filtered values.
 * @example
 *
 * compact([0, 1, false, 2, null, '', 3, undefined])
 * // => [0, 1, false, 2, null, '', 3]
 */
const compact = defn('compact', reject(isNil))

export default compact
