import assocPath from './assocPath'
import defn from './defn'
import getPath from './getPath'
import isFunction from './isFunction'

const updatePath = defn('updatePath', (path, updater, data) => {
  if (isFunction(data.updateIn)) {
    return data.updateIn(path, updater)
  }
  return assocPath(path, updater(getPath(path, data)), data)
})

export default updatePath
