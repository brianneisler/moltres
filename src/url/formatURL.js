import { format } from 'url'

import { isFunction } from '../lang'

/**
 *
 * 1. Initially, an empty string (‘’ say result) is created and then following parameters are looked for in order.
 * 2. urlObject.protocol: string
 * If urlObject.protocol is a string it is appended to the result else if not undefined and not a string then Error is thrown.
 * If urlObject.protocol do not end with ASCII colon ( : ) then, the literal ‘:’ is appended to the result.
 * 3. urlObject.slashes: boolean
 * If either of the following property is true, then literals ‘//’ are appended to the result:
 * urlObject.slashes is true.
 * urlObject.protocol is http, https, ftp, gopher, or file, then slashes will be automatically true even if slashes is false.
 * 4. urlObject.auth: string
 * If the urlObject.auth is not undefined and urlObject.host or urlObject.hostname is also not undefined then auth is appended to the result with literal ‘@’ irrespective of whether the literal ‘@’ present or not at the end.
 * 5. urlObject.host: string
 * If urlObject.host is a string it is appended to the result else if not undefined and not a string then Error is thrown.
 * If it is undefined then urlObject.hostname is considered.
 * 6. urlObject.hostname: string
 * If urlObject.hostname is a string it is appended to the result else if not undefined and not a string then Error is thrown.
 * If both host and hostname are defined then host will be given considered.
 * 7. urlObject.port: (number | string)
 * If hostname is considered and urlObject.port is defined then literal ‘:’ will be appended to the result along with urlObject.port.
 * 8. urlObject.pathname: string} value
 * If urlObject.pathname is a string but not empty string and not starting with literal ‘/’, then literal ‘/’ is appended to the result.
 * urlObject.pathname is appended to the result.
 * Else UrlObject.pathname is not a string then Error is thrown.
 * 9. urlObject.search: string
 * If urlObject.search is a string but not empty string and not starting with literal ‘?’, then literal ‘?’ is appended to the result.
 * urlObject.search is appended to the result.
 * If urlObject.search is not a string then Error is thrown.
 * 10. urlObject.query: Object
 * If urlObject.query is an Object then literal ‘?’ is appended to the result along with output of calling the querystring module’s stringify() method passing the value of urlObject.query.
 * If both urlObject.search and urlObject.query are defined then urlObject.search will only be considered.
 * 11. urlObject.hash: string
 * If urlObject.hash is a string but not empty string and not starting with literal ‘#’, then literal ‘#’ is appended to the result.
 * urlObject.hash is appended to the result.
 * Else urlObject.hash is not a string and is not undefined then Error is thrown.
 * 12. Finally, the result is returned.
 *
 * @function
 * @since v0.4.0
 * @category url
 * @param {Object|Function} value
 * @returns {String} A formatted URL string
 */
const formatURL = (value) => {
  if (isFunction(value)) {
    return (...args) => formatURL(value(...args))
  }
  return format(value)
}

export default formatURL
