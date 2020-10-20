import isPathSubdir from './isPathSubdir'

describe('isPathSubdir', () => {
  test('Returns true for path that is sub-directory of given path', () => {
    expect(isPathSubdir('/foo/bar', '/foo/bar/baz')).toBe(true)
  })

  test('Returns false for path that is not a sub-directory of given path', () => {
    expect(isPathSubdir('/foo/bar', '/bar/baz')).toBe(false)
  })
})
