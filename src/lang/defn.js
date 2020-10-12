import allWith from './allWith'
import curry from './curry'
import dispatchable from './dispatchable'
import isString from './isString'
import nArySpread from './nArySpread'

/**
 * Defines a function with a few predefined behaviours. Functions defined with this method will...
 * - [curry](#curry)
 * - [dispatch](#dispatchable)
 * - [resolve all args](#resolveAll)
 *
 * @function
 * @since v0.0.3
 * @category lang
 * @sig defn(
 *   name: string,
 *   fn: (*) => any
 * ): (...args: any[], last: any) => last[name] ? last[name](...args) : defaultFn(...args)
 * @param {string} name The name of the method to call if it exists
 * @param {Function} fn The default function to execute if the named one does not exist on the last arg
 * @returns {Function} The wrapped function
 * @example
 *
 * const get = defn('get', (prop, value) => value[prop])
 * get('a', { a: 'foo' }) //=> 'foo'
 *
 * const obj = {
 *   props: {
 *     a: 'bar'
 *   }
 *   get: (prop) => obj.props[prop]
 * }
 * get('a', obj) //=> 'bar'
 */
const defn = (name, func) => {
  let dispatcher = func
  if (isString(name)) {
    dispatcher = dispatchable(name, func)
  }
  const arity = func.length
  const override = function (...args) {
    return allWith((resolvedArgs) => dispatcher.apply(this, resolvedArgs), args)
  }
  return curry(nArySpread(arity, override))
}

export default defn
