import evaluateConfigAndEnv from './evaluateConfigAndEnv'

describe('evaluateConfigAndEnv', () => {
  it('evaluates config and env values', () => {
    const result = evaluateConfigAndEnv({
      config: {
        bar: '${env.BAR}',
        foo: '${this.bar}'
      },
      env: {
        BAR: 'bar',
        FOO: '${config.foo}'
      }
    })
    expect(result).toEqual({
      config: {
        bar: 'bar',
        foo: 'bar'
      },
      env: {
        BAR: 'bar',
        FOO: 'bar'
      }
    })
  })

  it('supports arrays', () => {
    const result = evaluateConfigAndEnv({
      config: {
        bar: ['foo', 'bar']
      }
    })
    expect(result).toEqual({
      config: {
        bar: ['foo', 'bar']
      }
    })
  })

  it('supports resolving variables in arrays', () => {
    const result = evaluateConfigAndEnv({
      config: {
        bar: ['${this.foo}', 'bar'],
        foo: 'fooed'
      }
    })
    expect(result).toEqual({
      config: {
        bar: ['fooed', 'bar'],
        foo: 'fooed'
      }
    })
  })

  it('flattens single value statements', () => {
    const result = evaluateConfigAndEnv({
      config: {
        bar: {
          value: 'foo'
        }
      }
    })
    expect(result).toEqual({
      config: {
        bar: 'foo'
      }
    })
  })

  it('flattens nested value statements', () => {
    const result = evaluateConfigAndEnv({
      config: {
        bar: {
          value: {
            baz: {
              value: 'bong'
            }
          }
        }
      }
    })
    expect(result).toEqual({
      config: {
        bar: {
          baz: 'bong'
        }
      }
    })
  })

  it('evaluates variables that are contained withing a value statement', () => {
    const result = evaluateConfigAndEnv({
      config: {
        foo: {
          value: {
            bar: 'barred',
            baz: '${this.foo.bar}'
          }
        }
      }
    })
    expect(result).toEqual({
      config: {
        foo: {
          bar: 'barred',
          baz: 'barred'
        }
      }
    })
  })

  it('evaluates variables that point to objects that also have variables', () => {
    const result = evaluateConfigAndEnv({
      config: {
        bar: {
          baz: '${this.bop}'
        },
        bop: 'bip',
        foo: '${this.bar}'
      }
    })
    expect(result).toEqual({
      config: {
        bar: {
          baz: 'bip'
        },
        bop: 'bip',
        foo: {
          baz: 'bip'
        }
      }
    })
  })

  it('drops sensitive values when dropSensitive option is set to true', () => {
    const result = evaluateConfigAndEnv(
      {
        config: {
          foo: {
            sensitive: true,
            value: 'bar'
          }
        }
      },
      {
        dropSensitive: true
      }
    )
    expect(result).toEqual({
      config: {}
    })
  })

  it('drops nested values in parent sensitive values when dropSensitive option is set to true', () => {
    const result = evaluateConfigAndEnv(
      {
        config: {
          foo: {
            sensitive: true,
            value: {
              bar: {
                value: 'baz'
              },
              dong: 'bong'
            }
          }
        }
      },
      {
        dropSensitive: true
      }
    )
    expect(result).toEqual({
      config: {}
    })
  })

  it('does not include sensitive prop in value object when dropSensitive is false', () => {
    const result = evaluateConfigAndEnv(
      {
        config: {
          foo: {
            sensitive: true,
            value: {
              bar: 'baz'
            }
          }
        }
      },
      {
        dropSensitive: false
      }
    )
    expect(result).toEqual({
      config: {
        foo: {
          bar: 'baz'
        }
      }
    })
  })
})
