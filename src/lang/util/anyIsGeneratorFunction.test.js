import anyIsGeneratorFunction from './anyIsGeneratorFunction'

describe('anyIsGeneratorFunction', () => {
  test('returns true for generator function', () => {
    expect(anyIsGeneratorFunction(function* () {})).toBe(true)
  })

  test('returns false for all other values', () => {
    expect(anyIsGeneratorFunction(undefined)).toBe(false)
    expect(anyIsGeneratorFunction(null)).toBe(false)
    expect(anyIsGeneratorFunction('')).toBe(false)
    expect(anyIsGeneratorFunction('abc')).toBe(false)
    expect(anyIsGeneratorFunction(false)).toBe(false)
    expect(anyIsGeneratorFunction(true)).toBe(false)
    expect(anyIsGeneratorFunction(0)).toBe(false)
    expect(anyIsGeneratorFunction(-1)).toBe(false)
    expect(anyIsGeneratorFunction(1)).toBe(false)
    expect(anyIsGeneratorFunction(NaN)).toBe(false)
    expect(anyIsGeneratorFunction(Infinity)).toBe(false)
    expect(anyIsGeneratorFunction(-Infinity)).toBe(false)
    expect(anyIsGeneratorFunction({})).toBe(false)
    expect(anyIsGeneratorFunction([])).toBe(false)
    expect(anyIsGeneratorFunction(/abc/)).toBe(false)
    expect(anyIsGeneratorFunction((function* () {})())).toBe(false)
    expect(anyIsGeneratorFunction(async () => {})).toBe(false)
    expect(anyIsGeneratorFunction(() => {})).toBe(false)
    expect(anyIsGeneratorFunction(function () {})).toBe(false)
    expect(anyIsGeneratorFunction(new Array(0))).toBe(false)
    expect(anyIsGeneratorFunction(new ArrayBuffer(2))).toBe(false)
    expect(anyIsGeneratorFunction(new Boolean(false))).toBe(false)
    expect(anyIsGeneratorFunction(new Boolean(true))).toBe(false)
    expect(anyIsGeneratorFunction(new Date())).toBe(false)
    expect(anyIsGeneratorFunction(new Error())).toBe(false)
    expect(anyIsGeneratorFunction(new Number(1))).toBe(false)
    expect(anyIsGeneratorFunction(new Promise(() => {}))).toBe(false)
    expect(anyIsGeneratorFunction(new Proxy({}, {}))).toBe(false)
    expect(anyIsGeneratorFunction(new Set())).toBe(false)
    expect(anyIsGeneratorFunction(new String('abc'))).toBe(false)
    expect(anyIsGeneratorFunction(Symbol('abc'))).toBe(false)
    expect(anyIsGeneratorFunction(new WeakMap())).toBe(false)
    expect(anyIsGeneratorFunction(new WeakSet())).toBe(false)
  })
})
