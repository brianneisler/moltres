import { isEmpty, isString } from '../lang'

const formatHost = ({ host }) => {
  if (isString(host) && !isEmpty(host)) {
    return host
  }
  return ''
}

export default formatHost
