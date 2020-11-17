import { batchDeleteEntity } from '../../entity'
import { User } from '../schemas'

const batchDeleteUser = batchDeleteEntity(User)

export default batchDeleteUser
