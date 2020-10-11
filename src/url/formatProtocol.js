import { isEmpty, isString, last } from '../lang'

const formatProtocol = ({ protocol }) => {
  if (isString(protocol) && !isEmpty(protocol)) {
    if (last(protocol) !== ':') {
      protocol = protocol + ':'
    }
    return protocol
  }
  return ''
}

export default formatProtocol
