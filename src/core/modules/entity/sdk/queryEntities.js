import { buildQuery } from '../../../../db'
import { curry, forEach, isUndefined } from '../../../../lang'

const queryEntities = curry((Schema, context, data, queryOptions) =>
  buildQuery(
    (query) => {
      forEach((value, field) => {
        if (!isUndefined(value)) {
          query = query.where(field, '==', value)
        }
      }, data)
      return query
    },
    Schema,
    context,
    queryOptions
  )
)

export default queryEntities
