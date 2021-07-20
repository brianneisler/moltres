import { ImmutableList } from './classes'
import find from './find'

describe('find', () => {
  test('finds a value in an Array', () => {
    const collection = [{ value: 'foo' }, { value: 'bar' }]
    expect(find((value) => value.value === 'bar', collection)).toEqual({
      value: 'bar',
    })
  })
  test('finds value in array', () => {
    const array = ['a', 'b', 'c']
    const result = find((val, index) => val === 'b' && index === 1, array)
    expect(result).toBe('b')
  })

  test('finds value in object', () => {
    const object = { a: 1, b: 2, c: 3 }
    const result = find((val, key) => val === 2 && key === 'b', object)
    expect(result).toBe(2)
  })

  test('finds a value in an ImmutableList', () => {
    const collection = ImmutableList([{ value: 'foo' }, { value: 'bar' }])
    expect(find((value) => value.value === 'bar', collection)).toEqual({
      value: 'bar',
    })
  })

  test('returns undefined if no value is found in array', () => {
    const array = ['a', 'b', 'c']
    const result = find((val) => val === 'd', array)
    expect(result).toBe(undefined)
  })

  test('returns undefined if no value is found in object', () => {
    const object = { a: 1, b: 2, c: 3 }
    const result = find((val) => val === 4, object)
    expect(result).toBe(undefined)
  })

  test('upgrades to a Promise when an async predicate is used', async () => {
    const array = ['a', 'b', 'c']
    let result = find(
      (val, index) =>
        new Promise((resolve) => {
          setTimeout(() => {
            resolve(val === 'b' && index === 1)
          }, 0)
        }),
      array
    )

    expect(result).toBeInstanceOf(Promise)

    result = await result
    expect(result).toBe('b')
  })
})
