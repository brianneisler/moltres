import { handleActions } from '../../../redux'

import * as selectors from './selectors'

const mod = () => ({
  reducer: handleActions({}, {}),
  selectors
})

export default mod
