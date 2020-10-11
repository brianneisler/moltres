import { assocProperty, isFunction, isObject, isString } from '../lang'

import formatAuth from './formatAuth'
import formatHash from './formatHash'
import formatHost from './formatHost'
import formatHostname from './formatHostname'
import formatHref from './formatHref'
import formatOrigin from './formatOrigin'
import formatPassword from './formatPassword'
import formatPathname from './formatPathname'
import formatPort from './formatPort'
import formatProtocol from './formatProtocol'
import formatQuery from './formatQuery'
import formatSearch from './formatSearch'
import formatSlashes from './formatSlashes'
import formatUsername from './formatUsername'
import parseURL from './parseURL'

const formatLocation = (location) => {
  const result = {
    auth: formatAuth(location),
    hash: formatHash(location),
    host: formatHost(location),
    hostname: formatHostname(location),
    href: formatHref(location),
    origin: formatOrigin(location),
    password: formatPassword(location),
    pathname: formatPathname(location),
    port: formatPort(location),
    protocol: formatProtocol(location),
    query: formatQuery(location),
    search: formatSearch(location),
    slashes: formatSlashes(location),
    username: formatUsername(location)
  }
  if (location.state) {
    return assocProperty('state', location.state, result)
  }
  return result
}

const buildLocation = (value) => {
  if (isString(value)) {
    return buildLocation(parseURL(value))
  } else if (isFunction(value)) {
    return (...args) => buildLocation(value(...args))
  } else if (isObject(value)) {
    return formatLocation(value)
  }

  throw new TypeError(
    `buildLocation expected 'value' parameter to be either a String, Function or Object. Instead received ${value}`
  )
}

export default buildLocation
