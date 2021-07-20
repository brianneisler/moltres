import getPropertyOr from './getPropertyOr'

describe('getPropertyOr', () => {
  test('get using a string', () => {
    const value = {
      foo: 'bar',
    }
    expect(getPropertyOr('bar', 'foo', value)).toEqual('bar')
  })

  test("get using a string should return default when prop doesn't exist", () => {
    const value = {}
    expect(getPropertyOr('bar', 'foo', value)).toEqual('bar')
  })
})
