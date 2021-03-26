class RingBuffer {
  constructor(overflowHandler, limit = 10) {
    this.array = new Array(limit)
    this.length = 0
    this.limit = limit
    this.overflowHandler = overflowHandler
    this.pushIndex = 0
    this.popIndex = 0
  }

  flush() {
    const items = []
    while (this.length) {
      items.push(this.take()[0])
    }
    return items
  }

  isEmpty() {
    return this.length === 0
  }

  push(value) {
    this.array[this.pushIndex] = value
    this.pushIndex = (this.pushIndex + 1) % this.limit
    this.length++
  }

  setLimit(limit) {
    this.array = this.flush()
    this.length = this.array.length
    this.pushIndex = this.array.length
    this.popIndex = 0
    this.array.length = limit
    this.limit = limit
  }

  slide(value) {
    this.array[this.pushIndex] = value
    this.pushIndex = (this.pushIndex + 1) % this.length
    this.popIndex = this.pushIndex
  }

  // TODO BRN: Update this to return a Sequence
  take(number = 1) {
    const values = []
    while (number > 0 && this.length !== 0) {
      const value = this.array[this.popIndex]
      this.array[this.popIndex] = undefined
      this.length -= 1
      number -= 1
      this.popIndex = (this, this.popIndex + 1) % this.limit
      values.push(value)
    }
    return values
  }

  put(value) {
    if (this.length < this.limit) {
      return this.push(value)
    } else if (this.overflowHandler) {
      return this.overflowHandler(value, this)
    }
    throw new Error('RingBuffer overflow')
  }
}

export default RingBuffer
