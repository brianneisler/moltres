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
    all(this.promises)
      .then((results) => {
        resolve(results)
      })
      .catch((error) => reject(error))
  }
  return promise
}

export default listPromise
