import { isKeyed } from 'immutable'

import isFunction from './isFunction'
import isMap from './isMap'

const satisfiesKeyed = (value) => isKeyed(value) || isMap(value) || (value && isFunction(value.set))

export default satisfiesKeyed
