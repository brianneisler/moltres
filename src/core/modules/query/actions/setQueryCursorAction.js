import { actionBuilder } from '../../../../redux'
import { SetQueryCursorAction } from '../schemas'

const setQueryCursorAction = actionBuilder({
  Schema: SetQueryCursorAction
})

export default setQueryCursorAction
