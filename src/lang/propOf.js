import curry from './curry'
import getProperty from './getProperty'

const propOf = curry((value, name) => getProperty(name, value))

export default propOf
