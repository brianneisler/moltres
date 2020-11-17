import { uuidv4, weakMemoize } from '../lang'

import isWebWorker from './isWebWorker'

const getWorkerId = weakMemoize(() => {
  if (isWebWorker()) {
    return uuidv4()
  }
  return 0
})

export default getWorkerId
