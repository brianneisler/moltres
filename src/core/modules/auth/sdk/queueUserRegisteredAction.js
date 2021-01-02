import { queueAction } from '../../action'
import { UserRegisteredAction } from '../schemas'

const queueUserRegisteredAction = queueAction(UserRegisteredAction)

export default queueUserRegisteredAction
