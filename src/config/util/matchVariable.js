import { Regex } from '../constants'

/**
 * Accepts a string and attempts to find a variable string match
 *
 * @private
 * @function
 * @since v0.3.0
 * @category config.util
 * @param {string} string The string to match
 * @returns {{
 *   expression: string, // the matching variable expression
 *   exact: boolean // whether or not this match was exact
 * }}
 */
const matchVariable = (string) => {
  const result = string.match(Regex.VARIABLE)
  let expression
  let match
  let exact
  if (result) {
    expression = result[1]
    match = result[0]
    exact = result.input === result[0]
  }
  return {
    exact,
    expression,
    match
  }
}

export default matchVariable
