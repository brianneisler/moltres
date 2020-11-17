import { isFunction, last } from '../lang'

const setup = (...args) => {
  const lastArg = last(args)
  if (isFunction(lastArg.setup)) {
    return lastArg.setup(...args)
  }
  return lastArg
}

export default setup
