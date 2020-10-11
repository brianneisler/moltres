import { isEmpty, isString } from '../lang'

const formatPassword = ({ password }) => {
  if (isString(password) && !isEmpty(password)) {
    return password
  }
  return ''
}

export default formatPassword
