import RingBuffer from './RingBuffer'

describe('RingBuffer', () => {
  test('create a new RingBuffer', async () => {
    const overflowHandler = () => {}
    const ringBuffer = new RingBuffer(overflowHandler)
    expect(ringBuffer).toBeInstanceOf(RingBuffer)
    expect(ringBuffer).toMatchObject({
      limit: 10,
      overflowHandler
    })
  })
})
