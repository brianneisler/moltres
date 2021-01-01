import hasProperty from './hasProperty'
import isObject from './isObject'
import isString from './isString'

const isAction = (value) =>
  isObject(value) && isString(value.type) && hasProperty('payload', value)

export default isAction
