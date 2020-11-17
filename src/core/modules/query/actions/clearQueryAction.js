import { actionBuilder } from '../../../../redux'
import { ClearQueryAction } from '../schemas'

const clearQueryAction = actionBuilder({
  Schema: ClearQueryAction
})

export default clearQueryAction
