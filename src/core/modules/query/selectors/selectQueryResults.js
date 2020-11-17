import { createPath, curry, getPath } from '../../../../lang'

const selectQueryResults = curry((queryKey, state) =>
  getPath(['query', ...createPath(queryKey), 'results'], state)
)

export default selectQueryResults
