import assoc from './assoc'
import { ImmutableMap } from './classes'
import curry from './curry'
import getProperty from './getProperty'
import isImmutableMap from './isImmutableMap'
import keys from './keys'
import reduce from './reduce'
import size from './size'

const omit = curry((names, collection) => {
  const index = {}
  let idx = 0
  const len = size(names)

  while (idx < len) {
    index[names[idx]] = 1
    idx += 1
  }
  return reduce(
    (result, key) => {
      if (!index.hasOwnProperty(key)) {
        return assoc(key, getProperty(key, collection), result)
      }
      return result
    },
    isImmutableMap(collection) ? ImmutableMap({}) : {},
    keys(collection)
  )
})

export default omit
