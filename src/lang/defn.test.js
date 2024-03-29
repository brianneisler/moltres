import defn from './defn'

describe('defn', () => {
  test('calls default function when no args', () => {
    const test = defn('test', (...args) => {
      expect(args).toEqual([])
      return 'baz'
    })

    const result = test()
    expect(result).toBe('baz')
  })

  test('curries function', () => {
    const test = defn('test', (arg0, arg1) => {
      expect(arg0).toBe('foo')
      expect(arg1).toBe('bar')
      return 'baz'
    })

    const result = test()
    expect(result('foo', 'bar')).toBe('baz')
    expect(test('foo')('bar')).toBe('baz')
    expect(test('foo', 'bar')).toBe('baz')
  })

  test('maintains context of function', () => {
    const test = {
      func: defn('test', function () {
        expect(this).toBe(test)
        return 'baz'
      }),
    }
    expect(test.func()).toBe('baz')
  })

  test('resolves Promises before passing them to function', async () => {
    const test = defn('test', (arg1, arg2) => {
      expect(arg1).toBe(123)
      expect(arg2).toBe('foo')
      return 'baz'
    })

    const result = test(Promise.resolve(123), (async () => 'foo')())
    expect(result).toBeInstanceOf(Promise)
    expect(await result).toBe('baz')
  })

  test('calls default function in case of no implementation', () => {
    const obj = {}
    const test = defn('test', (arg1, arg2, arg3) => {
      expect(arg1).toBe('foo')
      expect(arg2).toBe('bar')
      expect(arg3).toBe(obj)
      return 'baz'
    })

    const result = test('foo', 'bar', obj)
    expect(result).toBe('baz')
  })

  test('calls embedded function in object when present', () => {
    const obj = {
      test(arg1, arg2, arg3) {
        expect(arg1).toBe('foo')
        expect(arg2).toBe('bar')
        expect(arg3).toBe(obj)
        expect(this).toBe(obj)
        return 'baz'
      },
    }
    // eslint-disable-next-line no-unused-vars
    const test = defn('test', (arg1, arg2, arg3) => 'wrong')

    const result = test('foo', 'bar', obj)
    expect(result).toBe('baz')
  })

  test('is arity of default function', () => {
    // eslint-disable-next-line no-unused-vars
    const test = defn('test', (arg1, arg2, arg3) => {})
    expect(test.length).toBe(3)
  })

  test('passes all args to function', () => {
    // eslint-disable-next-line no-unused-vars
    const test = defn('test', (arg1, ...args) => args)
    expect(test.length).toBe(1)
    expect(test('a', 'b', 'c')).toEqual(['b', 'c'])
  })

  test('does not exceed stack limit when embedded function is defined function', () => {
    const test = defn('test', () => 'baz')
    const obj = {
      test,
    }

    const result = test('foo', 'bar', obj)
    expect(result).toBe('baz')
  })

  test('does not exceed stack limit when embedded function is intercepted', () => {
    const test = defn('test', () => 'baz')
    const obj = {
      test() {
        return test.call(this)
      },
    }

    const result = test('foo', 'bar', obj)
    expect(result).toBe('baz')
  })
})
