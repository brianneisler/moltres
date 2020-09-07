import Immutable from 'immutable'

/**
 * Returns a Seq.Indexed of value repeated times times. When times is not defined, returns an infinite Seq of value.
 *
 * @private
 * @class
 * @since v0.1.0
 * @category lang.class
 * @param {Any} value The value to repeat
 * @param {?Number} times The number of times to repeat the value (defaults to Infinity)
 * @returns {Seq.Indexed} A new Indexed Seq
 * @example
 */
const { Repeat } = Immutable

export default Repeat
