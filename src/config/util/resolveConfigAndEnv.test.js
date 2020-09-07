import resolveConfigAndEnv from './resolveConfigAndEnv'

describe('resolveConfigAndEnv', () => {
  it('resolve config and env values', () => {
    const result = resolveConfigAndEnv({
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
})
