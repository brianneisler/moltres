import buildLocation from './buildLocation'
import omitLocationQuery from './omitLocationQuery'

describe('omitLocationQuery', () => {
  test('omit a query param to a location with no params', () => {
    expect(
      omitLocationQuery(
        ['foo'],
        buildLocation({
          pathname: '/baz'
        })
      )
    ).toEqual({
      hash: '',
      host: '',
      hostname: '',
      href: '/baz',
      origin: '',
      password: '',
      pathname: '/baz',
      port: '',
      protocol: '',
      query: {},
      search: '',
      username: ''
    })
  })

  test('omit a query param to a location with an existing param of the same name', () => {
    expect(
      omitLocationQuery(
        ['foo'],
        buildLocation({
          pathname: '/baz',
          query: {
            foo: 'bar'
          }
        })
      )
    ).toEqual({
      hash: '',
      host: '',
      hostname: '',
      href: '/baz',
      origin: '',
      password: '',
      pathname: '/baz',
      port: '',
      protocol: '',
      query: {},
      search: '',
      username: ''
    })
  })

  test('omit a query param to a location with multiple existing params', () => {
    expect(
      omitLocationQuery(
        ['bar'],
        buildLocation({
          pathname: '/baz',
          query: {
            bar: 'baz',
            foo: 'bar'
          }
        })
      )
    ).toEqual({
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
      username: ''
    })
  })
})
