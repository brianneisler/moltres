import createRingBuffer from './createRingBuffer'

const SLIDING_OVERFLOW_HANDLER = (value, buffer) => {
  buffer.slide(value)
}

const createSlidingBuffer = (limit) =>
  createRingBuffer(SLIDING_OVERFLOW_HANDLER, limit)

export default createSlidingBuffer
