import assoc from './assoc'
import assocPath from './assocPath'
import getPath from './getPath'
import getProperty from './getProperty'
import isFunction from './isFunction'
import isString from './isString'

const update = (selector, updater, data) => {
  if (isFunction(data.update)) {
    if (isString(selector)) {
      return data.update(selector, updater)
    }
    return data.updateIn(selector, updater)
  }
  if (isString(selector)) {
    return assoc(selector, updater(getProperty(selector, data)), data)
  }
  return assocPath(selector, updater(getPath(selector, data)), data)
}

export default update
