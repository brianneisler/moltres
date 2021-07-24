import assocProperty from './assocProperty'
import defn from './defn'
import getProperty from './getProperty'
import isFunction from './isFunction'

const updateProperty = defn('updateProperty', (property, updater, data) => {
  if (isFunction(data.update)) {
    return data.update(property, updater)
  }
  return assocProperty(property, updater(getProperty(property, data)), data)
})

export default updateProperty
