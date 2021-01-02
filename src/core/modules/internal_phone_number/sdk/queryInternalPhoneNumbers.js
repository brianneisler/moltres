import { buildQuery } from '../../../../db'
import { curry } from '../../../../lang'
import { InternalPhoneNumber } from '../schemas'

const queryInternalPhoneNumbers = curry((context, queryParams, queryOptions) =>
  buildQuery((query) => query, InternalPhoneNumber, context, queryOptions)
)

export default queryInternalPhoneNumbers
