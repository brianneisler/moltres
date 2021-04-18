const capture = (context, throwable) => {
  if (!context.error || !context.error.reporter) {
    throw new Error(
      'context must have error module defined and must have a reporter configured to capture a throwable value'
    )
  }
  context.error.reporter.capture(throwable)
}

export default capture
