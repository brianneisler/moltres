import { expected } from '../../error'
import { VARIABLE } from '../constants/Symbol'

import evaluateVariableString from './evaluateVariableString'

const expectedBadVariableEvaluation = (variable, evalError) =>
  expected({
    causes: [evalError],
    code: 'BadVariableEvaluation',
    data: {
      error: evalError,
      variable,
    },
    message: `An error occurred while evaluating the variable '${variable.variableString}'.\n\n"${evalError.message}"\n\n`,
  })

const newVariable = (variableString) => {
  const variable = {
    [VARIABLE]: true,
    evaluate(data, context) {
      try {
        return evaluateVariableString(variableString, data, context)
      } catch (error) {
        throw expectedBadVariableEvaluation(variable, error)
      }
    },
    variableString,
  }
  return variable
}

export default newVariable
