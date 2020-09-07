import {
  assocPath,
  isResolved,
  isString,
  pick,
  resolve,
  walkReduceDepthFirst
} from '../../lang'

import hasVariableString from './hasVariableString'
import newVariable from './newVariable'

const enhanceData = (data) =>
  walkReduceDepthFirst(
    (accum, value, pathParts) => {
      // TODO BRN: Break this up into something that is pluggable by core so that anyone can introduce new interpretable values.
      if (isString(value) && hasVariableString(value)) {
        return assocPath(pathParts, newVariable(value), accum)
      }
      return accum
    },
    data,
    data
  )

const resolveData = (data) => {
  // NOTE BRN: This step converts variable strings into variable objects.
  // NOTE BRN: The data object should not have any cicular references so this should be safe to walk without infinite loops.

  return walkReduceDepthFirst(
    (accum, value, pathParts) => {
      // TODO BRN: Break this up into something that is pluggable by core so that anyone can introduce new interpretable values.
      if (!isResolved(value)) {
        return assocPath(pathParts, resolve(value, accum), accum)
      }
      return accum
    },
    data,
    data
  )
}

const resolveConfigAndEnv = (data) => {
  const enhancedData = enhanceData(data)
  return pick(
    ['config', 'env'],
    resolveData({
      ...enhancedData,
      this: enhancedData.config
    })
  )
}

export default resolveConfigAndEnv
