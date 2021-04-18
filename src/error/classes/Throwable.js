class Throwable extends Error {
  constructor({ causes = [], code, data, message, name }) {
    super(message)
    this.causes = causes
    this.code = code
    this.data = data
    this.name = name
  }
}

export default Throwable
