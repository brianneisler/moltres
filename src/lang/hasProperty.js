import { has as rHas } from 'ramda'

import curry from './curry'
import isFunction from './isFunction'

const hasProperty = curry((selector, value) => {
  if (value && isFunction(value.has)) {
    return value.has(selector)
  }
  return rHas(selector, value)
})

export default hasProperty
