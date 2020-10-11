import { isEmpty, isString } from '../lang'

const formatUsername = ({ username }) => {
  if (isString(username) && !isEmpty(username)) {
    return username
  }
  return ''
}

export default formatUsername
