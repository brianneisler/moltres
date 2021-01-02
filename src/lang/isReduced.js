import { Symbol } from './constants'
import defn from './defn'
import isObject from './isObject'

const isReduced = defn(
  'lang.isReduced',
  (value) => isObject(value) && value[Symbol.REDUCED] === true
)

export default isReduced
