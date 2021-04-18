import Unexpected from './classes/Unexpected'
import unexpected from './unexpected'

describe('unexpected', () => {
  test('unexpected returns an Unexpected instance with the correct defaults', () => {
    const result = unexpected()
    expect(result).toBeInstanceOf(Unexpected)
    expect(result).toEqual(
      expect.objectContaining({
        causes: [],
        code: 'UNEXPECTED',
        message: 'An unexpected error occurred',
        name: 'Unexpected',
        stack: expect.any(String),
        statusCode: 500
      })
    )
  })
})
