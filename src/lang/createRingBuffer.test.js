import { RingBuffer } from './classes'
import createRingBuffer from './createRingBuffer'

describe('createRingBuffer', () => {
  test('creates a RingBuffer with the given arguments', () => {
    const overflowHandler = () => {}
    const limit = 100
    const result = createRingBuffer(overflowHandler, limit)

    expect(result).toBeInstanceOf(RingBuffer)
    expect(result).toMatchObject({
      limit,
      overflowHandler,
    })
  })
})
