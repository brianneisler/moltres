import defn from './defn'
import pipe from './pipe'
import reduce from './reduce'
import reduced from './reduced'

const reduceWhile = defn(
  'lang.reduceWhile',
  (predicate, iteratee, accumulator, iterable) =>
    reduce(
      (acc, value) =>
        pipe(
          (pValue) => predicate(acc, pValue),
          (result) => {
            return result ? iteratee(acc, value) : reduced(acc)
          }
        )(value),
      accumulator,
      iterable
    )
)
export default reduceWhile
