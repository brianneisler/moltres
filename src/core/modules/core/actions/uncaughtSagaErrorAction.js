import { createAction } from '../../../../redux'

const uncaughtSagaErrorAction = createAction(
  'core.UncaughtSagaErrorAction',
  ({ reason, saga }) => ({
    reason,
    saga
  })
)

export default uncaughtSagaErrorAction
