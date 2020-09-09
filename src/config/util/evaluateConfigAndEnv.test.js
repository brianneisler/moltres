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

  // TODO BRN: Fix this bug
  // it('flattens nested value statements', () => {
  //   const result = evaluateConfigAndEnv({
  //     config: {
  //       bar: {
  //         value: {
  //           baz: {
  //             value: 'bong'
  //           }
  //         }
  //       }
  //     }
  //   })
  //   expect(result).toEqual({
  //     config: {
  //       bar: {
  //         baz: 'bong'
  //       }
  //     }
  //   })
  // })

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
})
