import all from './all'
import externalPromise from './externalPromise'

const listPromise = (values = []) => {
  const promise = externalPromise()
  const { reject, resolve } = promise
  promise.promises = values

  promise.push = function (value) {
    this.promises.push(value)
    return this
  }

  promise.resolve = function () {
    if (this.promises.length === 0) {
      resolve(this.promises)
    } else {
      Promise.resolve(all(this.promises)).then(resolve).catch(reject)
    }
    return promise
  }
  return promise
}

export default listPromise
