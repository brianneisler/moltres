import { TO_STRING_TAG } from '../constants/Symbol'

/**
 * @private
 * @class
 * @since v0.1.0
 * @category lang.classes
 * @param {Any} value
 * @returns {Key} A new Key
 * @example
 */
class Key {
  constructor(value) {
    this.value = value
  }

  get [TO_STRING_TAG]() {
    return 'Key'
  }

  valueOf() {
    return this.value
  }
}

export default Key
