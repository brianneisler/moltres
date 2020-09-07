import defn from './defn'
import { anyIsPlainFunction } from './util'

/**
 * Checks if `any` is plain function. A plain function is not an AsyncFunction and not a GeneratorFunction
 *
 * @function
 * @since v0.3.0
 * @category lang
 * @param {*} any The value to check.
 * @returns {boolean} Returns `true` if `any` is a plain function, else `false`.
 * @example
 *
 * isPlainFunction(() => {})
 * // => true
 *
 * isPlainFunction(function() {})
 * // => true
 *
 * isPlainFunction(async function() {})
 * // => false
 *
 * isPlainFunction(function* () {})
 * // => false
 */
const isPlainFunction = defn('isPlainFunction', anyIsPlainFunction)

export default isPlainFunction
