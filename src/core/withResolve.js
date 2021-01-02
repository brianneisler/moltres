import { resolve } from '../lang'

const withResolve = (effect) => (...args) => resolve(effect(...args))

export default withResolve
