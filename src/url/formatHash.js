import { isEmpty, isString } from '../lang'

const formatHash = ({ hash }) => {
  if (isString(hash) && !isEmpty(hash)) {
    return hash
  }
  return ''
}

export default formatHash
