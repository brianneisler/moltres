import ImmutableList from './classes/ImmutableList'
import ImmutableMap from './classes/ImmutableMap'
import hasPath from './hasPath'

describe('hasPath', () => {
  describe('Object', () => {
    test('hasPath a single existing Property from an Object using [Property, Object] argument order', () => {
      const object = {
        foo: 'bar'
      }
      const result = hasPath('foo', object)
      expect(result).toEqual(true)
    })

    test('has a single non-existing Property from an Object using [Property, Object] argument order', () => {
      const value = {
        foo: 'bar'
      }
      expect(hasPath('bim', value)).toBe(false)
    })

    test('has from nil values returns false', () => {
      expect(hasPath('foo', undefined)).toBe(false)
      expect(hasPath('foo', null)).toBe(false)
    })

    test('`undefined` is NOT considered a Property', () => {
      const value = {
        [undefined]: 'foo'
      }
      expect(() => hasPath(undefined, value)).toThrow()
    })

    test('`null` is NOT considered a Property for Object', () => {
      const value = {
        [null]: 'foo'
      }
      expect(() => hasPath(null, value)).toThrow()
    })

    test('Booleans are not considered Properties for Object', () => {
      const value = {
        [false]: 'foo',
        [true]: 'bar'
      }
      expect(() => hasPath(false, value)).toThrow()
      expect(() => hasPath(true, value)).toThrow()
    })

    test('`Number` is NOT considered a Property for Object', () => {
      const value = {
        [0]: 'foo'
      }
      expect(() => hasPath(0, value)).toThrow()
    })

    test('supports Symbol values as Property for Object', () => {
      const sym = Symbol('foo')
      const value = {
        [sym]: 'foo'
      }
      expect(hasPath(sym, value)).toBe(true)
    })

    test('converts dot props to paths', () => {
      const value = {
        foo: {
          bar: 'foobar'
        }
      }
      expect(hasPath('foo.bar', value)).toBe(true)
    })

    test('supports array syntax', () => {
      const value = {
        foo: ['foobar']
      }
      const result = hasPath('foo[0]', value)
      expect(result).toBe(true)
    })
  })

  describe('Map', () => {
    test('has from a nested Map', () => {
      const value = {
        foo: new Map([
          [
            'bar',
            {
              bim: 'bop'
            }
          ]
        ])
      }
      expect(hasPath('foo.bar.bim', value)).toBe(true)
    })
  })

  describe('Array', () => {
    test('supports accessing Arrays with Paths', () => {
      const value = ['foobar']
      expect(hasPath('[0]', value)).toBe(true)
    })

    test('supports accessing arrays directly with Number in Path', () => {
      const value = ['foobar']
      expect(hasPath([0], value)).toBe(true)
    })
  })

  describe('ImmutableMap', () => {
    test('has a single existing Key from an ImmutableMap using [Key, ImmutableMap] argument order', () => {
      const map = new ImmutableMap([['foo', 'bar']])

      const result = hasPath('foo', map)
      expect(result).toEqual(true)
      expect(map).toEqual(new ImmutableMap([['foo', 'bar']]))
    })
  })

  describe('ImmutableList', () => {
    test('has a single existing Index from an ImmutableList using [Index, ImmutableList] argument order', () => {
      const list = new ImmutableList(['foo'])

      const result = hasPath([0], list)
      expect(result).toEqual(true)
      expect(list).toEqual(new ImmutableList(['foo']))
    })
  })
})
