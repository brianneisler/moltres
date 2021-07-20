import curryN from './curryN'
import getProperty from './getProperty'
import isArray from './isArray'
import isString from './isString'
import maxWith from './maxWith'

const maxBy = curryN(2, (transform, ...values) => {
  if (isString(transform)) {
    transform = getProperty(transform)
  }
  if (values.length === 1 && isArray(values[0])) {
    values = values[0]
  }
  return maxWith(
    (valueA, valueB) => (transform(valueB) > transform(valueA) ? valueB : valueA),
    ...values
  )
})

export default maxBy
