import { ITERATOR, TO_STRING_TAG } from '../constants/Symbol'
import anyToImmutableList from '../util/anyToImmutableList'

/**
 * Note: This class is **immutable**
 *
 * This class represents a Path of one or more Propeties, Keys and Indexes
 *
 * @private
 * @class
 * @category lang.classes
 * @since v0.1.0
 */
class Path {
  constructor(path) {
    this.path = anyToImmutableList(path)
    this.size = this.path.size
  }

  [ITERATOR]() {
    return this.path.values()
  }

  get [TO_STRING_TAG]() {
    return 'Path'
  }

  first() {
    return this.get(0)
  }

  get(index) {
    return this.path.get(index)
  }

  rest() {
    return this.tail()
  }

  tail() {
    return new Path(this.path.rest())
  }

  toName() {
    return this.path.join('.')
  }
}

export default Path
