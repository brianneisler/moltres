import dissocPath from './dissocPath'

describe('dissocPath', () => {
  test('removes existing property ', () => {
    const collection = {
      foo: 'bar'
    }
    expect(dissocPath(['foo'], collection)).toEqual({})
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
})
