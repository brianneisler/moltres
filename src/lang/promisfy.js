import invariant from './invariant'
import isFunction from './isFunction'

const promisfy = (func) => {
  invariant(isFunction(func), 'func must be a Function')
  return function (...args) {
    return new Promise((resolve, reject) => {
      args.push((err, value) => {
        if (err) {
          return reject(err)
        }

        return resolve(value)
      })

      func.apply(this, args)
    })
  }
}

export default promisfy
