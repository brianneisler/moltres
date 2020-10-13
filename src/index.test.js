describe('index.js', () => {
  test('requires without error', () => {
    expect(() => require('./index.js')).not.toThrow()
  })
})
