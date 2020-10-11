import buildLocation from './buildLocation'

describe('buildLocation', () => {
  test('buildLocation from protocol only', () => {
    expect(buildLocation('https://')).toEqual({
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
  })

  test('buildLocation from basic url with protocol', () => {
    expect(buildLocation('https://wat.app')).toEqual({
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
  })

  test('buildLocation from basic url with protocol and username password', () => {
    const location = buildLocation('https://duck:quack@wat.app')
    expect(location).toEqual({
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
  })

  test('buildLocation from string url', () => {
    const location = buildLocation(
      'https://wat-dev.com/wat/xbRf7k4euvo1QirancLP'
    )
    expect(location).toEqual({
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
  })

  test('buildLocation from function url', () => {
    const builder = buildLocation(
      () => 'https://wat-dev.com/wat/xbRf7k4euvo1QirancLP'
    )
    expect(builder()).toEqual({
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
  })

  test('buildLocation from object url', () => {
    const location = buildLocation({
      host: 'wat-dev.com',
      pathname: '/wat/xbRf7k4euvo1QirancLP',
      protocol: 'https:',
      query: {
        foo: 'bar'
      }
    })
    expect(location).toEqual({
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
  })

  test('buildLocation with just pathname ', () => {
    const location = buildLocation({
      pathname: '/foo'
    })
    expect(location).toEqual({
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
  })

  test('buildLocation with just pathname and state', () => {
    const location = buildLocation({
      pathname: '/foo',
      state: {
        foo: 'bar'
      }
    })
    expect(location).toEqual({
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
      state: {
        foo: 'bar'
      },
      username: ''
    })
  })
})
