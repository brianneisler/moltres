import invariant from '../lang/invariant'

const capture = (context, throwable) => {
  invariant(
    context.reporter,
    'context must have a reporter configured to capture a throwable value'
  )
  context.reporter.capture(context, throwable)
}

export default capture
