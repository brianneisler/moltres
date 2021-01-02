import { getPath } from '../lang'
import { select } from '../redux'

const getStatePath = function* (path) {
  return yield select((state) => getPath(path, state))
}

export default getStatePath
