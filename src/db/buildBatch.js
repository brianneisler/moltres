import { Code } from '../constants'
import { expected } from '../error'

import isPermissionsError from './isPermissionsError'

const buildBatch = async (context, builder) => {
  const { database } = context
  try {
    const batch = database.batch()
    // NOTE BRN: Batches are mutable
    await builder(batch)
    return batch
  } catch (error) {
    if (isPermissionsError(error)) {
      throw expected({
        causes: [error],
        code: Code.ACCESS_DENIED,
        message: error.message
      })
    }
    throw error
  }
}

export default buildBatch
