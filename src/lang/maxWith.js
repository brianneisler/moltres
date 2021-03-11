import curryN from './curryN'
import first from './first'
import reduceRight from './reduceRight'

const maxWith = curryN(2, (func, ...values) => {
  if (values.length === 1) {
    return values[0]
  }
  return reduceRight(func, first(values), values)
})

export default maxWith
