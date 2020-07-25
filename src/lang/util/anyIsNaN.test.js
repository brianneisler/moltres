import anyIsNaN from './anyIsNaN'

describe('anyIsNaN', () => {
  test('returns true for NaN', () => {
    expect(anyIsNaN(NaN)).toBe(true)
  })

  test('returns false for all other values', () => {
    expect(anyIsNaN(undefined)).toBe(false)
    expect(anyIsNaN(null)).toBe(false)
    expect(anyIsNaN('')).toBe(false)
    expect(anyIsNaN('abc')).toBe(false)
    expect(anyIsNaN(false)).toBe(false)
    expect(anyIsNaN(true)).toBe(false)
    expect(anyIsNaN(0)).toBe(false)
    expect(anyIsNaN(-1)).toBe(false)
    expect(anyIsNaN(1)).toBe(false)
    expect(anyIsNaN(Infinity)).toBe(false)
    expect(anyIsNaN(-Infinity)).toBe(false)
    expect(anyIsNaN({})).toBe(false)
    expect(anyIsNaN([])).toBe(false)
    expect(anyIsNaN(new Array(0))).toBe(false)
    expect(anyIsNaN([0])).toBe(false)
    expect(anyIsNaN(/abc/)).toBe(false)
    expect(anyIsNaN(async () => {})).toBe(false)
    expect(anyIsNaN(() => {})).toBe(false)
    expect(anyIsNaN(function () {})).toBe(false)
    expect(anyIsNaN((function* () {})())).toBe(false)
    expect(anyIsNaN(new ArrayBuffer(2))).toBe(false)
    expect(anyIsNaN(new Boolean(false))).toBe(false)
    expect(anyIsNaN(new Boolean(true))).toBe(false)
    expect(anyIsNaN(new Date())).toBe(false)
    expect(anyIsNaN(new Error())).toBe(false)
    expect(anyIsNaN(new Map())).toBe(false)
    expect(anyIsNaN(new Number(1))).toBe(false)
    expect(anyIsNaN(new Promise(() => {}))).toBe(false)
    expect(anyIsNaN(new Proxy({}, {}))).toBe(false)
    expect(anyIsNaN(new Set())).toBe(false)
    expect(anyIsNaN(new String('abc'))).toBe(false)
    expect(anyIsNaN(Symbol('abc'))).toBe(false)
    expect(anyIsNaN(Symbol.for('def'))).toBe(false)
    expect(anyIsNaN(new WeakMap())).toBe(false)
    expect(anyIsNaN(new WeakSet())).toBe(false)
  })
})
