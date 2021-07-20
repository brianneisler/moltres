import createRingBuffer from './createRingBuffer'

const EXPANDING_OVERFLOW_HANDLER = (value, buffer) => {
  const doubledLimit = 2 * buffer.limit
  buffer.setLimit(doubledLimit)
  buffer.push(value)
}

const createExpandingBuffer = (limit) => createRingBuffer(EXPANDING_OVERFLOW_HANDLER, limit)

export default createExpandingBuffer
