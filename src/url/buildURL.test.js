import buildURL from './buildURL'

describe('buildURL', () => {
  test('buildURL from protocol only', () => {
    expect(
      buildURL({
        auth: '',
        hash: '',
        host: '',
        hostname: '',
        href: 'https://',
        origin: 'https://',
        password: '',
        pathname: '',
        port: '',
        protocol: 'https:',
        query: {},
        search: '',
        slashes: true,
        username: ''
      })
    ).toBe('https://')
  })

  test('buildURL from basic url with protocol', () => {
    expect(
      buildURL({
        auth: '',
        hash: '',
        host: 'wat.app',
        hostname: 'wat.app',
        href: 'https://wat.app/',
        origin: 'https://wat.app',
        password: '',
        pathname: '/',
        port: '',
        protocol: 'https:',
        query: {},
        search: '',
        slashes: true,
        username: ''
      })
    ).toBe('https://wat.app/')
  })

  test('buildURL from basic url with protocol and username password', () => {
    expect(
      buildURL({
        auth: 'duck:quack',
        hash: '',
        host: 'wat.app',
        hostname: 'wat.app',
        href: 'https://duck:quack@wat.app/',
        origin: 'https://wat.app',
        password: 'quack',
        pathname: '/',
        port: '',
        protocol: 'https:',
        query: {},
        search: '',
        slashes: true,
        username: 'duck'
      })
    ).toBe('https://duck:quack@wat.app/')
  })

  test('buildURL with pathname', () => {
    expect(
      buildURL({
        auth: '',
        hash: '',
        host: 'wat-dev.com',
        hostname: 'wat-dev.com',
        href: 'https://wat-dev.com/wat/xbRf7k4euvo1QirancLP',
        origin: 'https://wat-dev.com',
        password: '',
        pathname: '/wat/xbRf7k4euvo1QirancLP',
        port: '',
        protocol: 'https:',
        query: {},
        search: '',
        slashes: true,
        username: ''
      })
    ).toBe('https://wat-dev.com/wat/xbRf7k4euvo1QirancLP')
  })

  test('buildURL with query params', () => {
    expect(
      buildURL({
        auth: '',
        hash: '',
        host: 'wat-dev.com',
        hostname: 'wat-dev.com',
        href: 'https://wat-dev.com/wat/xbRf7k4euvo1QirancLP?foo=bar',
        origin: 'https://wat-dev.com',
        password: '',
        pathname: '/wat/xbRf7k4euvo1QirancLP',
        port: '',
        protocol: 'https:',
        query: {
          foo: 'bar'
        },
        search: '?foo=bar',
        slashes: true,
        username: ''
      })
    ).toBe('https://wat-dev.com/wat/xbRf7k4euvo1QirancLP?foo=bar')
  })

  test('buildURL with just pathname ', () => {
    expect(
      buildURL({
        auth: '',
        hash: '',
        host: '',
        hostname: '',
        href: '/foo',
        origin: '',
        password: '',
        pathname: '/foo',
        port: '',
        protocol: '',
        query: {},
        search: '',
        slashes: false,
        username: ''
      })
    ).toBe('/foo')
  })
})
