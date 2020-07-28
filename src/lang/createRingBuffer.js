import { RingBuffer } from './classes'

const createRingBuffer = ({ limit, overflowHandler }) =>
  new RingBuffer(overflowHandler, limit)

export default createRingBuffer
