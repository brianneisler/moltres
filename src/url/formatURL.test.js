import formatURL from './formatURL'

describe('formatURL', () => {
  test('formatURL from auth property only', () => {
    expect(
      formatURL({
        auth: 'foo:bar'
      })
    ).toBe('')
  })

  test('formatURL from hash only', () => {
    expect(
      formatURL({
        hash: 'foo'
      })
    ).toBe('#foo')

    expect(
      formatURL({
        hash: '#foo'
      })
    ).toBe('#foo')
  })

  test('formatURL from hostname only', () => {
    expect(
      formatURL({
        hostname: 'wat.app'
      })
    ).toBe('wat.app')
  })

  test('formatURL from host only', () => {
    expect(
      formatURL({
        host: 'wat.app'
      })
    ).toBe('wat.app')
  })

  test('formatURL ignores href property', () => {
    expect(
      formatURL({
        href: 'https://wat.app'
      })
    ).toBe('')
  })

  test('formatURL ignores origin property', () => {
    expect(
      formatURL({
        origin: 'https://wat.app'
      })
    ).toBe('')
  })

  test('formatURL with password property only', () => {
    expect(
      formatURL({
        password: 'quack'
      })
    ).toBe('')
  })

  test('formatURL with username property only', () => {
    expect(
      formatURL({
        username: 'duck'
      })
    ).toBe('')
  })

  test('formatURL with host and auth properties', () => {
    expect(
      formatURL({
        auth: 'duck:quack',
        host: 'wat.app'
      })
    ).toBe('duck:quack@wat.app')
  })

  test('formatURL with pathname property only', () => {
    expect(
      formatURL({
        pathname: 'foo'
      })
    ).toBe('foo')
  })

  test('formatURL with host and pathname property only', () => {
    // TODO BRN: This does not automatically prefix the slash, fix this..
    // expect(
    //   formatURL({
    //     host: 'wat.app',
    //     pathname: 'foo'
    //   })
    // ).toBe('wat.appfoo')

    expect(
      formatURL({
        host: 'wat.app',
        pathname: '/foo'
      })
    ).toBe('wat.app/foo')
  })

  test('formatURL with port property only', () => {
    expect(
      formatURL({
        port: 8080
      })
    ).toBe('')
  })

  // TODO BRN: The format method returns this without port, seems strange, fix it...
  // test('formatURL with host and port properties', () => {
  //   expect(
  //     formatURL({
  //       host: 'wat.app',
  //       port: 8080
  //     })
  //   ).toBe('wat.app:8080')
  // })

  test('formatURL with hostname and port properties', () => {
    expect(
      formatURL({
        hostname: 'wat.app',
        port: 8080
      })
    ).toBe('wat.app:8080')
  })

  test('formatURL with protocol property only', () => {
    expect(
      formatURL({
        protocol: 'http'
      })
    ).toBe('http:')

    expect(
      formatURL({
        protocol: 'http:'
      })
    ).toBe('http:')
  })

  test('formatURL with protocol and host properties', () => {
    expect(
      formatURL({
        host: 'wat.app',
        protocol: 'http'
      })
    ).toBe('http://wat.app')
  })

  test('formatURL with query property only', () => {
    expect(
      formatURL({
        query: {
          foo: 'bar'
        }
      })
    ).toBe('?foo=bar')
  })

  test('formatURL with search property only', () => {
    expect(
      formatURL({
        search: 'foo=bar'
      })
    ).toBe('?foo=bar')

    expect(
      formatURL({
        search: '?foo=bar'
      })
    ).toBe('?foo=bar')
  })

  test('formatURL with search property only', () => {})

  // ({
  //   hash: '',
  //   host: 'wat.app',
  //   hostname: 'wat.app',
  //   href: 'https://wat.app/',
  //   origin: 'https://wat.app',
  //   password: '',
  //   pathname: '/',
  //   port: '',
  //   protocol: 'https:',
  //   query: {},
  //   search: '',
  //   searchParams: expect.any(Object),
  //   username: ''
  // })
})
