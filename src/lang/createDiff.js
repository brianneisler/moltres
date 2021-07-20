import append from './append'
import ImmutableList from './classes/ImmutableList'
import ImmutableSet from './classes/ImmutableSet'
import getPath from './getPath'
import isObject from './isObject'
import updateProperty from './updateProperty'
import walkReduceDepthFirst from './walkReduceDepthFirst'

const createDiff = (current, next) => {
  let paths = ImmutableSet()
  let diff = {
    assocs: [],
    dissocs: [],
  }
  diff = walkReduceDepthFirst(
    (accum, value, path) => {
      if (!isObject(value)) {
        const currentValue = getPath(path, current)
        if (currentValue !== value) {
          paths = paths.add(ImmutableList(path))
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
      if (!isObject(currentValue) && !paths.contains(ImmutableList(path))) {
        return updateProperty('dissocs', append({ path }), accum)
      }
      return accum
    },
    diff,
    current
  )
}

export default createDiff
