import whereEquals from './whereEquals'

describe('whereEquals', () => {
  test('returns true for an exact matching object', () => {
    const spec = {
      foo: 'bar',
    }
    expect(whereEquals(spec, { foo: 'bar' })).toBe(true)
  })

  test('returns true for a matching object that has extra properties', () => {
    const spec = {
      foo: 'bar',
    }
    expect(whereEquals(spec, { bim: 'bop', foo: 'bar' })).toBe(true)
  })

  test('returns false for a simple non matching object', () => {
    const spec = {
      foo: 'bar',
    }
    expect(whereEquals(spec, { foo: 'baz' })).toBe(false)
  })

  test('returns false for a partially matching object that has extra properties', () => {
    const spec = {
      bim: 'bop',
      foo: 'bar',
    }
    expect(whereEquals(spec, { foo: 'bar' })).toBe(false)
  })

  test('returns true for a deep path match', () => {
    const spec = { 'foo.bar': 'baz' }
    expect(
      whereEquals(spec, {
        foo: {
          bar: 'baz',
        },
      })
    ).toBe(true)
  })
})
