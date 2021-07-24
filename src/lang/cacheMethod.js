import contagion from './contagion'
import get from './get'
import isFunction from './isFunction'
import isNil from './isNil'
import isString from './isString'
import { anySetPathWith, anyToPath, objectMutateSetProperty } from './util'

const cacheMethod = (options, method) => {
  const { key, onHit, ttl } = options
  let keyFn
  if (isString(key)) {
    keyFn = () => key
  } else if (isFunction(key)) {
    keyFn = key
  } else {
    throw new Error('cache key must be set to either a function or a string')
  }

  return (context, ...rest) => {
    const { cache, system } = context
    if (!cache) {
      throw new Error(
        'Cache is missing from context. Likely it has not beeing included in your withContext enhancer.'
      )
    }
    const cacheKey = keyFn(context, ...rest)
    const cached = get(cacheKey, cache)
    if (cached && (isNil(ttl) || ttl === Infinity || system.now() < cached.cachedAt + ttl)) {
      if (isFunction(onHit)) {
        onHit(context, ...rest)
      }
      return cached.result
    }
    const result = method(context, ...rest)
    anySetPathWith(
      cache,
      anyToPath(cacheKey),
      {
        cachedAt: system.now(),
        result,
      },
      contagion,
      get,
      objectMutateSetProperty
    )
    return result
  }
}

export default cacheMethod
