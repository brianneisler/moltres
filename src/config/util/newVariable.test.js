import evaluate from './evaluate'
import newVariable from './newVariable'

describe('newVariable', () => {
  it('should evaluate as string when coherced', () => {
    const variableString = '${foo}'
    const data = {
      foo: 123,
    }
    const variable = newVariable(variableString)
    expect('abc' + evaluate(variable, data)).toBe('abc123')
  })
})
