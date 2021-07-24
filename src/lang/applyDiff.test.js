import applyDiff from './applyDiff'
import createDiff from './createDiff'

describe('applyDiff', () => {
  test('applies a diff to an empty object', () => {
    const aObject = {}
    const bObject = {
      bim: 'bop',
      foo: 'bar',
    }
    const diff = createDiff(aObject, bObject)
    const result = applyDiff(diff, {})
    expect(result).toEqual({
      bim: 'bop',
      foo: 'bar',
    })
    expect(result).not.toBe(bObject)
  })

  test('removes props from an object', () => {
    const aObject = {
      bim: 'bop',
      foo: 'bar',
    }
    const bObject = {
      bim: 'bop',
    }
    const diff = createDiff(aObject, bObject)
    const result = applyDiff(diff, {
      bim: 'bop',
      foo: 'bar',
    })
    expect(result).toEqual({
      bim: 'bop',
    })
    expect(result).not.toBe(bObject)
  })
})
