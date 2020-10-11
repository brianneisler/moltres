import { testValues } from '../test'

import isURL from './isURL'

describe('isURL', () => {
  test('returns true for a basic url', () => {
    expect(isURL('http://foo.com')).toBe(true)
  })

  test('returns false for all other values', () => {
    expect(isURL).toHaveReturnedFalsyForValues(testValues())
  })
})
