import identity from './identity'
import arrayFlatten from './util/arrayFlatten'
import arrayLikeReduce from './util/arrayLikeReduce'
import arrayLikeSlice from './util/arrayLikeSlice'

// TODO BRN: This method is important at a fundamental level. Need to rewrite this to not depend upon data methods.
/**
 * Performs left-to-right function composition. The leftmost function may have
 * any arity; the remaining functions must be unary.
 *
 * In some libraries this function is named `sequence`.
 *
 * **Note:** The result of pipe is not automatically curried.
 *
 * @function
 * @since v0.1.0
 * @category lang
 * @param {...Function} functions
 * @returns {Function}
 * @example
 *
 * const f = pipe(Math.pow, negate, inc)
 *
 * f(3, 4) // -(3^4) + 1
 */
const pipe = (...functions) => {
  functions = arrayFlatten(functions)
  const { length } = functions
  if (length === 0) {
    return identity
  }

  if (length === 1) {
    return functions[0]
  }

  const firstFunc = functions[0]
  const rest = arrayLikeSlice(functions, 1)

  return (...args) => arrayLikeReduce(rest, firstFunc(...args), (piped, func) => func(piped))
}

export default pipe
