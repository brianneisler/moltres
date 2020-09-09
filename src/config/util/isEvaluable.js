import { isFunction } from '../../lang'

const isEvaluable = (value) => value != null && isFunction(value.evaluate)

export default isEvaluable
