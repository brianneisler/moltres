import { put } from '../redux'

import { assocStateAction } from './actions'

const assocStatePath = function* (path, state) {
  yield put(
    assocStateAction({
      path,
      state
    })
  )
}

export default assocStatePath
