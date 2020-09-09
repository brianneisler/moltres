import indexes from './indexes'
import isFunction from './isFunction'
import properties from './properties'
import satisfiesIndexed from './satisfiesIndexed'
import satisfiesPropertied from './satisfiesPropertied'
import { iteratorToArray } from './util'

const keys = (value) => {
  if (value && isFunction(value.keySeq)) {
    return value.keySeq().toList()
  }
  if (value && isFunction(value.keys)) {
    return iteratorToArray(value.keys())
  }
  if (satisfiesIndexed(value)) {
    return indexes(value)
  }
  if (satisfiesPropertied(value)) {
    return properties(value)
  }
  throw new Error(`Cannot get keys of the given value ${value}`)
}

export default keys
