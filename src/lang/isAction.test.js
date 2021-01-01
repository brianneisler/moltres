import isAction from './isAction'

describe('isAction', () => {
  test('Returns true for an object with a type and payload property', () => {
    expect(
      isAction({
        payload: null,
        type: 'foo'
      })
    ).toBe(true)
  })

  test('Returns true for object where the payload is set to undefined', () => {
    expect(
      isAction({
        payload: undefined,
        type: 'foo'
      })
    ).toBe(true)
  })

  test('returns false for all other values', () => {
    expect(isAction(undefined)).toBe(false)
    expect(isAction(null)).toBe(false)
    expect(isAction('')).toBe(false)
    expect(isAction('abc')).toBe(false)
    expect(isAction(false)).toBe(false)
    expect(isAction(true)).toBe(false)
    expect(isAction(0)).toBe(false)
    expect(isAction(-1)).toBe(false)
    expect(isAction(1)).toBe(false)
    expect(isAction(NaN)).toBe(false)
    expect(isAction(Infinity)).toBe(false)
    expect(isAction(-Infinity)).toBe(false)
    expect(isAction([])).toBe(false)
    expect(isAction(new Array(0))).toBe(false)
    expect(isAction([0])).toBe(false)
    expect(isAction({})).toBe(false)
    expect(isAction(/abc/)).toBe(false)
    expect(isAction(async () => {})).toBe(false)
    expect(isAction(() => {})).toBe(false)
    expect(isAction(function () {})).toBe(false)
    expect(isAction((function* () {})())).toBe(false)
    expect(isAction(new ArrayBuffer(2))).toBe(false)
    expect(isAction(new Boolean(false))).toBe(false)
    expect(isAction(new Boolean(true))).toBe(false)
    expect(isAction(new Date())).toBe(false)
    expect(isAction(new Error())).toBe(false)
    expect(isAction(new Map())).toBe(false)
    expect(isAction(new Number(1))).toBe(false)
    expect(isAction(new Promise(() => {}))).toBe(false)
    expect(isAction(new Proxy({}, {}))).toBe(false)
    expect(isAction(new Set())).toBe(false)
    expect(isAction(new String('abc'))).toBe(false)
    expect(isAction(Symbol('abc'))).toBe(false)
    expect(isAction(Symbol.for('def'))).toBe(false)
    expect(isAction(new WeakMap())).toBe(false)
    expect(isAction(new WeakSet())).toBe(false)
  })
})
