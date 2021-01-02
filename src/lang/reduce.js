import curry from './curry'
import isReduced from './isReduced'
import iterate from './iterate'
import pipe from './pipe'

const reduce = curry((iteratee, accumulator, iterable) => {
  let accum = accumulator
  return iterate(
    (next) =>
      pipe(
        (pNext) => {
          if (pNext.done) {
            return accum
          }
          return iteratee(accum, pNext.value, pNext.kdx)
        },
        (nextAccum) => {
          accum = nextAccum
          if (isReduced(accum)) {
            return {
              ...next,
              done: true,
              value: accum.value
            }
          }
          if (next.done) {
            return {
              ...next,
              value: accum
            }
          }
          return next
        }
      )(next),
    iterable
  )
})

export default reduce
