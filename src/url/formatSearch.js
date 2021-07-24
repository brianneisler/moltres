import { cleanse, getProperty, isEmpty, isObject, isString, join, keys, map } from '../lang'

const formatSearch = ({ query, search }) => {
  query = query ? cleanse(query) : null
  if (isString(search) && !isEmpty(search)) {
    return search
  }

  if (query && !isEmpty(query)) {
    return (
      '?' +
      join(
        '&',
        map((searchKey) => {
          let searchParam = getProperty(searchKey, query)
          if (isObject(searchParam)) {
            searchParam = JSON.stringify(searchParam)
          }
          return `${searchKey}=${encodeURIComponent(searchParam)}`
        }, keys(query))
      )
    )
  }
  return ''
}

export default formatSearch
