import {
  always,
  identity,
  includes,
  invariant,
  isFunction,
  isNil,
  isPlainObject,
  isResolved,
  isString,
  isUndefined,
  map,
  resolveToResolver,
  split
} from '../lang'

import { Delimiter } from './constants'

const handleAction = (
  handler = identity,
  type = always(true),
  defaultProps = {}
) => {
  let typeFilter = type
  if (isString(type)) {
    const types = split(Delimiter.ACTION_TYPE, type.toString())
    typeFilter = (action) => {
      const { type: actionType } = action
      if (!actionType || !includes(actionType.toString(), types)) {
        return false
      }
      return true
    }
  }
  invariant(
    isFunction(typeFilter),
    'Expected type to be a string or a filter function'
  )
  invariant(
    isFunction(handler) || isPlainObject(handler),
    'Expected handler to be a function or object with next and throw methods'
  )

  const [nextHandler, throwHandler] = isFunction(handler)
    ? [handler, handler]
    : map((aHandler) => (isNil(aHandler) ? identity : aHandler), [
        handler.next,
        handler.throw
      ])

  return (props, action) => {
    if (!action && props && props.type) {
      action = props
      props = defaultProps
    }
    if (isUndefined(props)) {
      props = defaultProps
    }
    if (!typeFilter(action)) {
      return props
    }

    if (action && action.error === true) {
      return throwHandler(props, action)
    }

    const result = nextHandler(props, action)
    if (!isResolved(result) && action && action.promise) {
      const resolver = resolveToResolver(result)
      action.promise.push(resolver.promise)
      return resolver
    }
    return result
  }
}

export default handleAction
