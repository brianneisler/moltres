import assocLocationQuery from './assocLocationQuery'
import buildLocation from './buildLocation'

describe('assocLocationQuery', () => {
  test('assoc a query param to a location with no params', () => {
    expect(
      assocLocationQuery(
        'foo',
        'bar',
        buildLocation({
          pathname: '/baz'
        })
      )
    ).toEqual({
      auth: '',
      hash: '',
      host: '',
      hostname: '',
      href: '/baz?foo=bar',
      origin: '',
      password: '',
      pathname: '/baz',
      port: '',
      protocol: '',
      query: {
        foo: 'bar'
      },
      search: '?foo=bar',
      slashes: false,
      username: ''
    })
  })

  test('assoc a query param to a location with an existing param of the same name', () => {
    expect(
      assocLocationQuery(
        'foo',
        'bip',
        buildLocation({
          pathname: '/baz',
          query: {
            foo: 'bar'
          }
        })
      )
    ).toEqual({
      auth: '',
      hash: '',
      host: '',
      hostname: '',
      href: '/baz?foo=bip',
      origin: '',
      password: '',
      pathname: '/baz',
      port: '',
      protocol: '',
      query: {
        foo: 'bip'
      },
      search: '?foo=bip',
      slashes: false,
      username: ''
    })
  })

  test('assoc a query param to a location with an existing param of a different name', () => {
    expect(
      assocLocationQuery(
        'bar',
        'baz',
        buildLocation({
          pathname: '/baz',
          query: {
            foo: 'bar'
          }
        })
      )
    ).toEqual({
      auth: '',
      hash: '',
      host: '',
      hostname: '',
      href: '/baz?foo=bar&bar=baz',
      origin: '',
      password: '',
      pathname: '/baz',
      port: '',
      protocol: '',
      query: {
        bar: 'baz',
        foo: 'bar'
      },
      search: '?foo=bar&bar=baz',
      slashes: false,
      username: ''
    })
  })
})
