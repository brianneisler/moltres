import isIterable from './isIterable'
import isString from './isString'
import isSymbol from './isSymbol'
import toArray from './toArray'
import toPath from './toPath'

const createPath = (value) => {
  if (isString(value)) {
    return toPath(value)
  }
  if (isIterable(value)) {
    return toPath(toArray(value))
  }
  if (isSymbol(value)) {
    return toPath([value])
  }
  throw new Error(`cannot convert the given value into a Path ${value}`)
}

export default createPath
