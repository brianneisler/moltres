import { Code } from '../constants'
import { expected } from '../error'

import isPermissionsError from './isPermissionsError'

const buildTransaction = async (context, builder) => {
  const { database } = context
  try {
    return database.runTransaction((transaction) =>
      builder({
        ...context,
        transaction
      })
    )
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

export default buildTransaction
