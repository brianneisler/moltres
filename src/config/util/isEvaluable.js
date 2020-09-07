import { isFunction } from '../../lang'

const isEvaluable = (value) => value != null && isFunction(value.resolve)

export default isEvaluable
