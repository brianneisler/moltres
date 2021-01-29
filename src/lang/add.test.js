import add from './add'

describe('add', () => {
  test('adds two integers together', () => {
    expect(add(2, 3)).toEqual(5)
  })

  test('adds two numbers together', async () => {
    expect(add(2.2, 3.2)).toEqual(5.4)
  })

  test('converts strings into numbers and then adds them together', async () => {
    expect(add('7', '10')).toEqual(17)
  })
})
