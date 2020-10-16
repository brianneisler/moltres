import curry from './curry'
import { anyIsSymbol } from './util'

/**
 * Checks if `value` is classified as a `Symbol` primitive or object.
 *
 * @function
 * @since v0.1.0
 * @category lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a symbol, else `false`.
 * @example
 *
 * isSymbol(Symbol.iterator)
 * // => true
 *
 * isSymbol(Symbol('abc'))
 * // => true
 *
 * isSymbol(Symbol.for('abc'))
 * // => true
 *
 * isSymbol('abc')
 * // => false
 */
const isSymbol = curry(anyIsSymbol)

export default isSymbol
