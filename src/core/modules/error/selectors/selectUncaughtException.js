import { createSelector, select } from '../../../../lang'

const selectUncaughtException = select(
  createSelector('error.uncaughtException')
)

export default selectUncaughtException
