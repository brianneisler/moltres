import isArray from '../lang/isArray'
import isString from '../lang/isString'

const isThrowable = (value) =>
  value != null &&
  isArray(value.causes) &&
  isString(value.code) &&
  isString(value.message) &&
  isString(value.name)

export default isThrowable
