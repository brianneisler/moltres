import { isFunction, isObject } from '../lang'

const isQuery = (value) => isObject(value) && isFunction(value.onSnapshot)

export default isQuery
