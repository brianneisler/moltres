import { anyIsPlainFunction } from './util'

const isIterator = (value) => value != null && anyIsPlainFunction(value.next)

export default isIterator
