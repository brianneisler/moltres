import Throwable from './Throwable'

class Expected extends Throwable {
  constructor({
    causes,
    code = 'EXPECTED',
    data,
    message = 'An expected error occurred',
    name = 'Expected',
    statusCode = 400
  }) {
    super({
      causes,
      code,
      data,
      message,
      name
    })
    this.statusCode = statusCode
  }

  isExpected() {
    return true
  }
}

export default Expected
