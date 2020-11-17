import { identity } from '../../../../lang'
import { call, handleChannel, put } from '../../../../redux'
import getContext from '../../../getContext'
import { uncaughtExceptionAction } from '../actions'

import createUnhandledRejectionChannel from './createUnhandledRejectionChannel'

function* monitorUnhandledRejection() {
  const channel = createUnhandledRejectionChannel()
  yield call(handleChannel, channel, function* (event) {
    const context = yield* getContext(identity)
    yield put(uncaughtExceptionAction(context, event))
  })
}

export default monitorUnhandledRejection
