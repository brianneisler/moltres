const expected = ({
  causes = [],
  code = 'EXPECTED',
  data,
  message = 'An expected error occurred',
  statusCode = 400
}) => {
  const error = new Error(message)
  error.type = 'EXPECTED'
  error.causes = causes
  error.code = code
  error.data = data
  error.statusCode = statusCode
  return error
}

export default expected
