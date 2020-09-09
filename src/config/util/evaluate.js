import isEvaluable from './isEvaluable'

/**
 * Evaluates a value.
 *
 * Dispatches to the `evaluate` method if it exists. If an evaluate method returns
 * a value that is also evaluate, this method will evaluate that value as
 * well.
 *
 * @private
 * @function
 * @since v0.3.0
 * @category config.util
 * @param {*} any The value to evaluate.
 * @returns {*} The evaluated value.
 * @example
 *
 * evaluate('foo')
 * // => 'foo'
 *
 * evaluate({
 *  evaluate: () => 'bar'
 * })
 * //=> bar
 *
 * evaluate({
 *   evaluate: () => ({
 *     evaluate: () => 'bar'
 *   })
 * })
 * //=> bar
 */
const evaluate = (any, ...rest) => {
  if (isEvaluable(any)) {
    return evaluate(any.evaluate(...rest), ...rest)
  }
  return any
}

export default evaluate
