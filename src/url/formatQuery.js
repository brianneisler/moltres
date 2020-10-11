import { cleanse, isEmpty, isString } from '../lang'

import parseSearch from './parseSearch'

const formatQuery = ({ query, search }) => {
  if (isString(search) && !isEmpty(search)) {
    return parseSearch(search)
  }
  return query ? cleanse(query) : {}
}

export default formatQuery
