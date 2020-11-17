import { createAction } from '../../../../redux'

const assocStateAction = createAction('ASSOC_STATE', ({ path, state }) => ({
  path,
  state
}))

export default assocStateAction
