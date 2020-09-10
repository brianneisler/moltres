import {
  assocPath,
  dissocPath,
  equals,
  hasProperty,
  isObject,
  isString,
  map,
  pick,
  reject,
  walkReduceDepthFirst
} from '../../lang'
import * as lang from '../../lang'
import * as path from '../../path'

import evaluate from './evaluate'
import getCwd from './getCwd'
import getStage from './getStage'
import getTarget from './getTarget'
import hasVariableString from './hasVariableString'
import isEvaluable from './isEvaluable'
import newVariable from './newVariable'

const UTIL_METHODS = {
  ...lang,
  ...path
}

// NOTE BRN: This step converts variable strings into variable objects.
// NOTE BRN: The data object should not have any cicular references so this should be safe to walk without infinite loops.
const enhanceData = (data, options) =>
  walkReduceDepthFirst(
    (accum, value, pathParts) => {
      // NOTE BRN: We drop any path parts that are the key 'value' since those
      // are collapsed during this process.
      pathParts = reject(equals('value'), pathParts)
      // TODO BRN: Break this up into something that is pluggable by core so
      // that anyone can introduce new interpretable values.
      if (isObject(value)) {
        if (hasProperty('value', value)) {
          if (value.sensitive && options.dropSensitive) {
            return dissocPath(pathParts, accum)
          }
        }
        return accum
      }
      if (isString(value) && hasVariableString(value)) {
        return assocPath(pathParts, newVariable(value), accum)
      }
      return assocPath(pathParts, value, accum)
    },
    map(() => ({}), data),
    data
  )

// NOTE BRN: The data object coule have circular references within variables.
const evaluateData = (data, context) => {
  const result = walkReduceDepthFirst(
    (accum, value, pathParts) => {
      if (isEvaluable(value)) {
        return assocPath(pathParts, evaluate(value, accum, context), accum)
      }
      return accum
    },
    data,
    data
  )

  // NOTE BRN: This allows for variables that refer to objects with variables to
  // be properly resolved.
  if (!equals(data, result)) {
    return evaluateData(result, context)
  }
  return result
}

const evaluateConfigAndEnv = (data, options = {}, context = {}) => {
  const cwd = getCwd(options)
  const stage = getStage(options)
  const target = getTarget(options)
  const enhancedData = enhanceData(data, options)

  return pick(
    ['config', 'env'],
    evaluateData(
      {
        ...enhancedData,
        this: enhancedData.config
      },
      {
        ...UTIL_METHODS,
        cwd,
        stage,
        target,
        ...context
      }
    )
  )
}

export default evaluateConfigAndEnv
