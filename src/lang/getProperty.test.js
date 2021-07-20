import getProperty from './getProperty'

describe('getProperty', () => {
  test('get using a function', () => {
    const value = {
      foo: 'bar',
    }
    expect(getProperty((val) => val.foo, value)).toEqual('bar')
  })
})
