import { isEmpty, isString } from '../lang'

const formatHostname = ({ host, hostname }) => {
  if (isString(hostname) && !isEmpty(hostname)) {
    return hostname
  }
  if (isString(host) && !isEmpty(host)) {
    return host
  }
  return ''
}

export default formatHostname
