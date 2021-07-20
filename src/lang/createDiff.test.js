import createDiff from './createDiff'

describe('createDiff', () => {
  test('returns all props of the given object as assocs if the original object is empty', () => {
    expect(
      createDiff(
        {},
        {
          bim: 'bop',
          foo: 'bar',
        }
      )
    ).toEqual({
      assocs: [
        {
          path: ['bim'],
          value: 'bop',
        },
        {
          path: ['foo'],
          value: 'bar',
        },
      ],
      dissocs: [],
    })
  })

  test('returns all props of the original object as dissocs if the current object is empty', () => {
    expect(
      createDiff(
        {
          bim: 'bop',
          foo: 'bar',
        },
        {}
      )
    ).toEqual({
      assocs: [],
      dissocs: [
        {
          path: ['bim'],
        },
        {
          path: ['foo'],
        },
      ],
    })
  })

  test('returns all props of the original object as dissocs if the current object is empty', () => {
    expect(
      createDiff(
        {
          bim: 'bop',
          foo: 'bar',
        },
        {}
      )
    ).toEqual({
      assocs: [],
      dissocs: [
        {
          path: ['bim'],
        },
        {
          path: ['foo'],
        },
      ],
    })
  })
})
