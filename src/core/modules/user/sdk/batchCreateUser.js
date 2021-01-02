import { batchCreateEntity } from '../../entity'
import { User } from '../schemas'

const batchCreateUser = batchCreateEntity(User)

export default batchCreateUser
