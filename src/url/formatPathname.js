import { head, isEmpty, isString } from '../lang'

const formatPathname = ({ host, hostname, pathname, protocol }) => {
  if (isString(pathname) && !isEmpty(pathname)) {
    if (head(pathname) !== '/') {
      pathname = '/' + pathname
    }
    return pathname
  }

  if (protocol && !hostname && !host) {
    return ''
  }
  return '/'
}

export default formatPathname
