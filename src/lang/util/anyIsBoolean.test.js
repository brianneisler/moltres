import anyIsBoolean from './anyIsBoolean'

describe('anyIsBoolean', () => {
  test('returns true for plain booleans', () => {
    expect(anyIsBoolean(false)).toBe(true)
    expect(anyIsBoolean(true)).toBe(true)
  })

  test('returns true for native Boolean objects', () => {
    expect(anyIsBoolean(new Boolean(false))).toBe(true)
    expect(anyIsBoolean(new Boolean(true))).toBe(true)
  })

  test('returns false for all other values', () => {
    expect(anyIsBoolean(undefined)).toBe(false)
    expect(anyIsBoolean(null)).toBe(false)
    expect(anyIsBoolean('')).toBe(false)
    expect(anyIsBoolean('abc')).toBe(false)
    expect(anyIsBoolean(0)).toBe(false)
    expect(anyIsBoolean(-1)).toBe(false)
    expect(anyIsBoolean(1)).toBe(false)
    expect(anyIsBoolean(NaN)).toBe(false)
    expect(anyIsBoolean(Infinity)).toBe(false)
    expect(anyIsBoolean(-Infinity)).toBe(false)
    expect(anyIsBoolean({})).toBe(false)
    expect(anyIsBoolean([])).toBe(false)
    expect(anyIsBoolean(/abc/)).toBe(false)
    expect(anyIsBoolean(async () => {})).toBe(false)
    expect(anyIsBoolean(() => {})).toBe(false)
    expect(anyIsBoolean(function () {})).toBe(false)
    expect(anyIsBoolean((function* () {})())).toBe(false)
    expect(anyIsBoolean(new Array(0))).toBe(false)
    expect(anyIsBoolean(new ArrayBuffer(2))).toBe(false)
    expect(anyIsBoolean(new Date())).toBe(false)
    expect(anyIsBoolean(new Error())).toBe(false)
    expect(anyIsBoolean(new Number(1))).toBe(false)
    expect(anyIsBoolean(new Promise(() => {}))).toBe(false)
    expect(anyIsBoolean(new Proxy({}, {}))).toBe(false)
    expect(anyIsBoolean(new Set())).toBe(false)
    expect(anyIsBoolean(new String('abc'))).toBe(false)
    expect(anyIsBoolean(Symbol('abc'))).toBe(false)
    expect(anyIsBoolean(new WeakMap())).toBe(false)
    expect(anyIsBoolean(new WeakSet())).toBe(false)
  })
})
