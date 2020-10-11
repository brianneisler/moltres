import { isEmpty, isString } from '../lang'

const formatPort = ({ port }) => {
  if (isString(port) && !isEmpty(port)) {
    return port
  }
  return ''
}

export default formatPort
