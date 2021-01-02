import { Symbol } from './constants'
import defn from './defn'

const reduced = defn('lang.reduced', (value) => ({
  [Symbol.REDUCED]: true,
  value
}))

export default reduced
