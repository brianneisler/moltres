import { curry, dissocProperty, omit } from '../lang'

import buildLocation from './buildLocation'

const omitLocationQuery = curry((props, location) =>
  buildLocation({
    ...dissocProperty('search', location),
    query: {
      ...omit(props, location.query)
    }
  })
)

export default omitLocationQuery
