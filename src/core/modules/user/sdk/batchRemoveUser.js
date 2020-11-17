import { batchRemoveEntity } from '../../entity'
import { User } from '../schemas'

const batchRemoveUser = batchRemoveEntity(User)

export default batchRemoveUser
