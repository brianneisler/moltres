import append from './append'
import getPath from './getPath'
import hasPath from './hasPath'
import isObject from './isObject'
import updateProperty from './updateProperty'
import walkReduceDepthFirst from './walkReduceDepthFirst'

const createDiff = (current, next) => {
  let diff = {
    assocs: [],
    dissocs: [],
  }
  diff = walkReduceDepthFirst(
    (accum, value, path) => {
      if (!isObject(value)) {
        const currentValue = getPath(path, current)
        if (currentValue !== value) {
          return updateProperty(
            'assocs',
            append({
              path,
              value,
            }),
            accum
          )
        }
      }
      return accum
    },
    diff,
    next
  )

  return walkReduceDepthFirst(
    (accum, currentValue, path) => {
      if (!isObject(currentValue) && !hasPath(path, next)) {
        return updateProperty('dissocs', append({ path }), accum)
      }
      return accum
    },
    diff,
    current
  )
}

export default createDiff
