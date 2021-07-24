import dissocPath from './dissocPath'

describe('dissocPath', () => {
  test('removes existing property using Array', () => {
    const collection = {
      foo: 'bar',
    }
    expect(dissocPath(['foo'], collection)).toEqual({})
  })

  test('removes existing property using string', () => {
    const collection = {
      foo: 'bar',
    }
    expect(dissocPath('foo', collection)).toEqual({})
  })

  // test("returns same object if property doesn't exist", () => {
  //   const collection = {
  //     foo: 'bar'
  //   }
  //   const result = dissocPath(['bar'], collection)
  //   expect(result).toEqual({
  //     foo: 'bar'
  //   })
  //   expect(result).toBe(collection)
  // })

  test('removes existing path using Array', () => {
    const collection = {
      foo: {
        bar: 'baz',
      },
    }
    expect(dissocPath(['foo', 'bar'], collection)).toEqual({
      foo: {},
    })
  })
  test('removes existing path using Array', () => {
    const collection = {
      foo: {
        bar: 'baz',
      },
    }
    expect(dissocPath('foo.bar', collection)).toEqual({
      foo: {},
    })
  })
})
