import createRingBuffer from './createRingBuffer'

const createFixedBuffer = (limit) => createRingBuffer(null, limit)

export default createFixedBuffer
