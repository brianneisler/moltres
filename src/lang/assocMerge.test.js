import assocMerge from './assocMerge'

describe('assocMerge', () => {
  test('assoc to an object using a single existing key', () => {
    const collection = {
      foo: 'bar',
    }
    expect(assocMerge({ bar: 'bam', foo: 'baz' }, collection)).toEqual({
      bar: 'bam',
      foo: 'baz',
    })
  })
})
