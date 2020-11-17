import { actionBuilder } from '../../../../redux'
import { UserRegisteredAction } from '../schemas'

const userRegisteredAction = actionBuilder({
  Schema: UserRegisteredAction
})

export default userRegisteredAction
