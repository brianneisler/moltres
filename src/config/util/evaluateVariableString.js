import { concat, getProperty, keys, omit, values } from '../../lang'

import matchVariable from './matchVariable'

const evaluateVariableString = (variableString, data, context = {}) => {
  const { exact, expression, match } = matchVariable(variableString)

  if (!match) {
    return variableString
  }

  const resolvedExpression = evaluateVariableString(expression, data)

  const self = getProperty('this', data)
  data = omit(['this'], data)

  const params = concat(keys(data), Object.keys(context))
  const args = concat(values(data), Object.values(context))
  const func = new Function(params, `return ${resolvedExpression}`)

  let value = func.apply(self, args)
  if (!exact) {
    value = variableString.replace(match, value)
  }
  return value
}

export default evaluateVariableString
