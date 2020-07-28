import createRingBuffer from './createRingBuffer'

const DROPPING_OVERFLOW_HANDLER = () => {
  // Do nothing (drop value)
}

const createDroppingBuffer = (limit) =>
  createRingBuffer(DROPPING_OVERFLOW_HANDLER, limit)

export default createDroppingBuffer
