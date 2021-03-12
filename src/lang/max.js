import curryN from './curryN'
import isArray from './isArray'
import maxWith from './maxWith'

const max = curryN(1, (...values) => {
  if (values.length === 1 && isArray(values[0])) {
    values = values[0]
  }
  return maxWith(
    (valueA, valueB) => (valueB > valueA ? valueB : valueA),
    values
  )
})

export default max
