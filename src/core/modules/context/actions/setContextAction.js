import { actionBuilder } from '../../../../redux'
import { SetContextAction } from '../schemas'

const setContextAction = actionBuilder({
  Schema: SetContextAction
})

export default setContextAction
