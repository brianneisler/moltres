import matchPath from './matchPath'

describe('matchPath', () => {
  test('match path without wildcard', () => {
    expect(matchPath('/foo', { path: '/foo' })).toEqual({
      isExact: true,
      params: {},
      path: '/foo',
      url: '/foo'
    })
  })

  test('match path with wildcard', () => {
    expect(matchPath('/foo/123', { path: '/foo/:fooId' })).toEqual({
      isExact: true,
      params: {
        fooId: '123'
      },
      path: '/foo/:fooId',
      url: '/foo/123'
    })
  })
})
