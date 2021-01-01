import curry from './curry'

/**
 * Wraps a function of any arity (including nullary) in a function that accepts exactly `n` parameters. Any extraneous parameters are spread and then reapplied on execution. This is useful when you want to ensure a function's paramter length is exactly `n` but still passes all arguments through.
 *
 * @function
 * @since v0.0.4
 * @category lang
 * @param {Number} n The desired arity of the new function.
 * @param {Function} fn The function to wrap.
 * @returns {Function} A new function wrapping `fn`. The new function is guaranteed to be of parameter length `n`.
 * @example
 *
 * const takesNArgs = (...args) => [ ...args ]
 *
 * takesNArgs.length //=> 0
 * takesNArgs(1, 2) //=> [1, 2]
 *
 * const takesTwoArgs = nArySpread(2, takesNArgs)
 * takesTwoArgs.length //=> 2
 * // All arguments are passed to the wrapped function
 * takesTwoArgs(1, 2, 3) //=> [1, 2, 3]
 *
 * const curriedTakesTwoArgs = curry(takesTwoArgs)
 * // auto currying works as expected
 * const takesAtLeastOneMoreArg = curriedTakesTwoArgs(3)
 * takesAtLeastOneMoreArg(1, 2) // => [3, 1, 2]
 */
const nArySpread = curry((n, fn) => {
  switch (n) {
    case 0:
      return function () {
        return fn.call(this)
      }
    case 1:
      // eslint-disable-next-line no-unused-vars
      return function (a0) {
        return fn.apply(this, arguments)
      }
    case 2:
      // eslint-disable-next-line no-unused-vars
      return function (a0, a1) {
        return fn.apply(this, arguments)
      }
    case 3:
      // eslint-disable-next-line no-unused-vars
      return function (a0, a1, a2) {
        return fn.apply(this, arguments)
      }
    case 4:
      // eslint-disable-next-line no-unused-vars
      return function (a0, a1, a2, a3) {
        return fn.apply(this, arguments)
      }
    case 5:
      // eslint-disable-next-line no-unused-vars
      return function (a0, a1, a2, a3, a4) {
        return fn.apply(this, arguments)
      }
    case 6:
      // eslint-disable-next-line no-unused-vars
      return function (a0, a1, a2, a3, a4, a5) {
        return fn.apply(this, arguments)
      }
    case 7:
      // eslint-disable-next-line no-unused-vars
      return function (a0, a1, a2, a3, a4, a5, a6) {
        return fn.apply(this, arguments)
      }
    case 8:
      // eslint-disable-next-line no-unused-vars
      return function (a0, a1, a2, a3, a4, a5, a6, a7) {
        return fn.apply(this, arguments)
      }
    case 9:
      // eslint-disable-next-line no-unused-vars
      return function (a0, a1, a2, a3, a4, a5, a6, a7, a8) {
        return fn.apply(this, arguments)
      }
    case 10:
      // eslint-disable-next-line no-unused-vars
      return function (a0, a1, a2, a3, a4, a5, a6, a7, a8, a9) {
        return fn.apply(this, arguments)
      }
    default:
      throw new Error(
        'First argument to nArySpread must be a non-negative integer no greater than ten'
      )
  }
})
export default nArySpread
