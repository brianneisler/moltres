/**
 * Checks if `any` is `undefined`.
 *
 * @private
 * @function
 * @since v0.1.0
 * @category lang.util
 * @param {Any} any The value to check.
 * @returns {Boolean} Returns `true` if `any` is `undefined`, else `false`.
 * @example
 *
 * anyIsUndefined(void 0)
 * // => true
 *
 * anyIsUndefined(null)
 * // => false
 */
const anyIsUndefined = (value) => value === undefined

export default anyIsUndefined
