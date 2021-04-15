class Expected extends Error {
  constructor({
    causes = [],
    code = 'EXPECTED',
    data,
    message = 'An expected error occurred',
    name = 'Expected',
    statusCode = 400
  }) {
    super(message)
    this.causes = causes
    this.code = code
    this.data = data
    this.name = name
    this.statusCode = statusCode
  }
}

export default Expected
