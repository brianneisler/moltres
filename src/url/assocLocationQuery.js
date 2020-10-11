import { assocPath, dissocProperty } from '../lang'

import buildLocation from './buildLocation'

const assocLocationQuery = (param, value, location) =>
  buildLocation(
    assocPath(['query', param], value, dissocProperty('search', location))
  )

export default assocLocationQuery
