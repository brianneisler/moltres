import Symbol from '../classes/Symbol'

/**
 * The `Symbol.iterator` well-known symbol specifies the default iterator for an object. Used by for...of.
 *
 * See [Symbol.iterator](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Symbol/iterator) for more information.
 *
 * @private
 * @type {Symbol}
 * @since v0.1.0
 * @category lang.constants.Symbol
 */
export const ITERATOR =
  typeof Symbol !== 'undefined' ? Symbol.iterator : '@@iterator'

/**
 * The `Symbol` for labeling a `Reduced` object. This is used to early exit a
 * reduce call.
 *
 * @private
 * @type {Symbol}
 * @since v0.6.0
 * @category lang.constants.Symbol
 */
export const REDUCED =
  typeof Symbol !== 'undefined' ? Symbol.for('@@reduced') : '@@reduced'

/**
 * The `Symbol.toStringTag` well-known symbol is a string valued property that
 * is used in the creation of the default string description of an object. It
 * is accessed internally by the
 * [`Object.prototype.toString()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/toString)
 * method.
 *
 * @private
 * @type {Symbol}
 * @since v0.1.0
 * @category lang.constants.Symbol
 */
export const TO_STRING_TAG = Symbol.toStringTag
