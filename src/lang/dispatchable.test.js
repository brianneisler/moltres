import dispatchable from './dispatchable'

describe('dispatchable', () => {
  test('calls default function when no args', () => {
    const test = dispatchable('test', (arg1) => {
      expect(arg1).toBe(undefined)
      return 'baz'
    })

    const result = test()
    expect(result).toBe('baz')
  })

  test('maintains context of function', () => {
    const test = {
      func: dispatchable('test', function () {
        expect(this).toBe(test)
        return 'baz'
      }),
    }
    expect(test.func()).toBe('baz')
  })

  test('calls default function in case of no implementation', () => {
    const obj = {}
    const test = dispatchable('test', (arg1, arg2, arg3) => {
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
    const test = dispatchable('test', (arg1, arg2, arg3) => 'wrong')

    const result = test('foo', 'bar', obj)
    expect(result).toBe('baz')
  })

  test('is arity of default function', () => {
    // eslint-disable-next-line no-unused-vars
    const test = dispatchable('test', (arg1, arg2, arg3) => {})
    expect(test.length).toBe(3)
  })

  test('passes all args to function', () => {
    // eslint-disable-next-line no-unused-vars
    const test = dispatchable('test', (arg1, ...args) => args)
    expect(test.length).toBe(1)
    expect(test('a', 'b', 'c')).toEqual(['b', 'c'])
  })

  test('does not dispatch to array', () => {
    const concat = dispatchable('concat', (value) => value.concat(['baz']))
    const array = ['bar']

    const result = concat(['foo'], array)
    expect(result).toEqual(['foo', 'baz'])
  })

  test('does not exceed stack limit when embedded function is defined function', () => {
    const test = dispatchable('test', () => 'baz')
    const obj = {
      test,
    }

    const result = test('foo', 'bar', obj)
    expect(result).toBe('baz')
  })

  test('does not exceed stack limit when embedded function is intercepted', () => {
    const test = dispatchable('test', () => 'baz')
    const obj = {
      test() {
        return test.call(this)
      },
    }

    const result = test('foo', 'bar', obj)
    expect(result).toBe('baz')
  })
})
