import anyIsBuffer from './anyIsBuffer'

describe('anyIsBuffer', () => {
  test('returns true for Buffer', () => {
    expect(anyIsBuffer(Buffer.from('test'))).toBe(true)
  })

  test('returns false for all other values', () => {
    expect(anyIsBuffer(undefined)).toBe(false)
    expect(anyIsBuffer(null)).toBe(false)
    expect(anyIsBuffer('')).toBe(false)
    expect(anyIsBuffer('abc')).toBe(false)
    expect(anyIsBuffer(0)).toBe(false)
    expect(anyIsBuffer(-1)).toBe(false)
    expect(anyIsBuffer(1)).toBe(false)
    expect(anyIsBuffer(false)).toBe(false)
    expect(anyIsBuffer(true)).toBe(false)
    expect(anyIsBuffer(NaN)).toBe(false)
    expect(anyIsBuffer(Infinity)).toBe(false)
    expect(anyIsBuffer(-Infinity)).toBe(false)
    expect(anyIsBuffer({})).toBe(false)
    expect(anyIsBuffer([])).toBe(false)
    expect(anyIsBuffer(/abc/)).toBe(false)
    expect(anyIsBuffer(async () => {})).toBe(false)
    expect(anyIsBuffer(() => {})).toBe(false)
    expect(anyIsBuffer(function () {})).toBe(false)
    expect(anyIsBuffer((function* () {})())).toBe(false)
    expect(anyIsBuffer(new Array(0))).toBe(false)
    expect(anyIsBuffer(new ArrayBuffer(2))).toBe(false)
    expect(anyIsBuffer(new Boolean(false))).toBe(false)
    expect(anyIsBuffer(new Boolean(true))).toBe(false)
    expect(anyIsBuffer(new Date())).toBe(false)
    expect(anyIsBuffer(new Error())).toBe(false)
    expect(anyIsBuffer(new Number(1))).toBe(false)
    expect(anyIsBuffer(new Promise(() => {}))).toBe(false)
    expect(anyIsBuffer(new Proxy({}, {}))).toBe(false)
    expect(anyIsBuffer(new Set())).toBe(false)
    expect(anyIsBuffer(new String('abc'))).toBe(false)
    expect(anyIsBuffer(Symbol('abc'))).toBe(false)
    expect(anyIsBuffer(new Uint8Array(2))).toBe(false)
    expect(anyIsBuffer(new WeakMap())).toBe(false)
    expect(anyIsBuffer(new WeakSet())).toBe(false)
  })
})
