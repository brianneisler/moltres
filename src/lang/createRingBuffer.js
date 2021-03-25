import { RingBuffer } from './classes'

const createRingBuffer = (overflowHandler, limit) =>
  new RingBuffer(overflowHandler, limit)

export default createRingBuffer
