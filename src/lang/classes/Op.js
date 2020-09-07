import { TO_STRING_TAG } from '../constants/Symbol'

/**
 * Note: This class is **immutable**
 *
 * This class represents an Op which can be yielded and executed by Generator middleware
 *
 * @class
 * @private
 * @category lang.classes
 * @since v0.1.0
 */
class Op {
  constructor(fn) {
    this.fn = fn
  }

  get [TO_STRING_TAG]() {
    return 'Op'
  }
}

export default Op
