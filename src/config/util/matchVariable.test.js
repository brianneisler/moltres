import matchVariable from './matchVariable'

describe('matchVariable', () => {
  it('should exact match variable with only one word', () => {
    expect(matchVariable('${abc}')).toEqual({
      exact: true,
      expression: 'abc',
      match: '${abc}',
    })
  })

  it('should return null for non match', () => {
    expect(matchVariable('abc')).toEqual({
      exact: undefined,
      expression: undefined,
      match: undefined,
    })
  })

  it('should return expression with incomplete nested braces when missing outer brace', () => {
    expect(matchVariable('${{abc}')).toEqual({
      exact: true,
      expression: '{abc',
      match: '${{abc}',
    })
  })

  it('should match variable with surounding text', () => {
    expect(matchVariable('hello ${abc} dude')).toEqual({
      exact: false,
      expression: 'abc',
      match: '${abc}',
    })
  })

  it('should match OR variables without surrounding text', () => {
    expect(matchVariable("${abc || 'world'}")).toEqual({
      exact: true,
      expression: "abc || 'world'",
      match: "${abc || 'world'}",
    })
  })

  it('should match OR variables with surrounding text', () => {
    expect(matchVariable("hello ${abc || 'world'}")).toEqual({
      exact: false,
      expression: "abc || 'world'",
      match: "${abc || 'world'}",
    })
  })
})
