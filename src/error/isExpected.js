import isFunction from '../lang/isFunction'

const isExpected = (value) =>
  value != null && isFunction(value.isExpected) && value.isExpected()

export default isExpected
