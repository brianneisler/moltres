class Unexpected extends Error {
  constructor({
    causes = [],
    code = 'UNEXPECTED',
    data,
    message = 'An unexpected error occurred',
    name = 'Unxpected',
    statusCode = 500
  }) {
    super(message)
    this.causes = causes
    this.code = code
    this.data = data
    this.name = name
    this.statusCode = statusCode
  }
}

export default Unexpected
