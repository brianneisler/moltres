import { dissoc as rDissoc } from 'ramda'

import curry from './curry'
import isFunction from './isFunction'

const dissocProperty = curry((selector, collection) => {
  if (collection && isFunction(collection.delete)) {
    return collection.delete(selector)
  }
  return rDissoc(selector, collection)
})

export default dissocProperty
