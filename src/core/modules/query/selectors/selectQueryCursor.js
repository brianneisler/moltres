import { createPath, curry, getPath } from '../../../../lang'

const selectQueryCursor = curry((queryKey, state) =>
  getPath(['query', ...createPath(queryKey), 'cursor'], state)
)

export default selectQueryCursor
