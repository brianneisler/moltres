import Throwable from './Throwable'

class Unexpected extends Throwable {
  constructor({
    causes,
    code = 'UNEXPECTED',
    data,
    message = 'An unexpected error occurred',
    name = 'Unexpected',
    statusCode = 500
  } = {}) {
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
    return false
  }
}

export default Unexpected
