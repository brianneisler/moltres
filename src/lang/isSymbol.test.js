import { symbols, testValues } from '../test'

import isSymbol from './isSymbol'
import { arrayDifference } from './util'

describe('isSymbol', () => {
  test('returns true for all symbol types', () => {
    expect(isSymbol).toHaveReturnedTruthyForValues(symbols())
  })

  test('returns false for all other values', () => {
    expect(isSymbol).toHaveReturnedFalsyForValues(arrayDifference(testValues(), symbols()))
  })
})
