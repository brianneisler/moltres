import assoc from './assoc'
import ImmutableList from './classes/ImmutableList'
import ImmutableMap from './classes/ImmutableMap'
import createPath from './createPath'
import first from './first'
import getProperty from './getProperty'
import hasProperty from './hasProperty'
import isImmutable from './isImmutable'
import isInteger from './isInteger'
import isNil from './isNil'
import isObject from './isObject'
import isPath from './isPath'
import isString from './isString'
import size from './size'
import slice from './slice'

const getNextCollection = (collection, part, parts) => {
  if (part === '$') {
    return collection
  }
  if (
    !isNil(collection) &&
    hasProperty(part, collection) &&
    isObject(getProperty(part, collection))
  ) {
    return getProperty(part, collection)
  }
  if (isNil(collection)) {
    return {}
  }
  if (isInteger(getProperty(1, parts))) {
    if (isImmutable(collection)) {
      return new ImmutableList()
    }
    return []
  }
  if (isImmutable(collection)) {
    return new ImmutableMap()
  }
  return {}
}

const assocPath = (path, value, collection) => {
  if (isString(path)) {
    path = createPath(path)
  }
  if (!isPath(path)) {
    throw new TypeError(`setPath expected 'path' parameter to be a Path. Instead received ${path}`)
  }
  if (size(path) === 0) {
    return value
  }
  const part = first(path)
  if (size(path) > 1) {
    const nextCollection = getNextCollection(collection, part, path)
    value = assocPath(slice(1, Infinity, path), value, nextCollection)
  }
  if (part === '$') {
    return value
  }
  return assoc(part, value, collection)
}

export default assocPath
