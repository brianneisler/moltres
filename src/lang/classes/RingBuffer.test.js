import RingBuffer from './RingBuffer'

describe('RingBuffer', () => {
  test('create a new RingBuffer', () => {
    const overflowHandler = () => {}
    const ringBuffer = new RingBuffer(overflowHandler)
    expect(ringBuffer).toBeInstanceOf(RingBuffer)
    expect(ringBuffer).toMatchObject({
      limit: 10,
      overflowHandler
    })
  })

  test('put and take event from RingBuffer', () => {
    const overflowHandler = () => {}
    const ringBuffer = new RingBuffer(overflowHandler)
    const event = { foo: 'bar' }
    ringBuffer.put(event)
    expect(ringBuffer.length).toBe(1)
    const result = ringBuffer.take()
    expect(result).toEqual([event])
    expect(result[0]).toBe(event)
    expect(ringBuffer.length).toBe(0)
  })

  test('flush removes all events from RingBuffer', () => {
    const overflowHandler = () => {}
    const ringBuffer = new RingBuffer(overflowHandler)
    ringBuffer.put({ a: 1 })
    ringBuffer.put({ b: 2 })
    ringBuffer.put({ c: 3 })
    expect(ringBuffer.length).toBe(3)
    const result = ringBuffer.flush()
    expect(result).toEqual([{ a: 1 }, { b: 2 }, { c: 3 }])
    expect(ringBuffer.length).toBe(0)
  })
})
