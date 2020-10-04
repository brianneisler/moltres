import curry from './curry'
import isFunction from './isFunction'
import isNil from './isNil'
import isUndefined from './isUndefined'

const getProperty = curry((property, value) => {
  if (isUndefined(property) || property === '$') {
    return value
  }
  if (isFunction(property)) {
    return property(value)
  }
  if (isNil(value)) {
    return undefined
  }
  if (isFunction(value.get)) {
    return value.get(property)
  }
  return value[property]
})

export default getProperty
