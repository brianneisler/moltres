import * as lang from '../../lang'
import * as path from '../../path'

import matchVariable from './matchVariable'

const { concat, getProp, keys, omit, values } = lang

const UTIL_METHODS = {
  ...lang,
  ...path
}

UTIL_METHODS.KEYS = Object.keys(UTIL_METHODS)
UTIL_METHODS.VALUES = Object.values(UTIL_METHODS)

const evaluateVariableString = (variableString, data) => {
  const { exact, expression, match } = matchVariable(variableString)

  if (!match) {
    return variableString
  }

  const resolvedExpression = evaluateVariableString(expression, data)

  const self = getProp('this', data)
  data = omit(['this'], data)

  const params = concat(keys(data), UTIL_METHODS.KEYS)
  const args = concat(values(data), UTIL_METHODS.VALUES)
  const func = new Function(params, `return ${resolvedExpression}`)

  let value = func.apply(self, args)
  if (!exact) {
    value = variableString.replace(match, value)
  }
  return value
}

export default evaluateVariableString
