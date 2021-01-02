import { createAction } from '../../../../redux'

const mergeStateAction = createAction('MERGE_STATE', ({ path, state }) => ({
  path,
  state
}))

export default mergeStateAction
