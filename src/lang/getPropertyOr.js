import curry from './curry'
import defaultTo from './defaultTo'
import getProperty from './getProperty'

const getPropertyOr = curry((_default, prop, value) =>
  defaultTo(_default, getProperty(prop, value))
)

export default getPropertyOr
