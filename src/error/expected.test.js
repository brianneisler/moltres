import Expected from './classes/Expected'
import expected from './expected'

describe('expected', () => {
  test('expected returns an Expected instance with the correct defaults', () => {
    const result = expected()
    expect(result).toBeInstanceOf(Expected)
    expect(result).toEqual(
      expect.objectContaining({
        causes: [],
        code: 'EXPECTED',
        message: 'An expected error occurred',
        name: 'Expected',
        stack: expect.any(String),
        statusCode: 400,
      })
    )
  })
})
