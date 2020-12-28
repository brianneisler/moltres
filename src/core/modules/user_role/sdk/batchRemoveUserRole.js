import { batchRemoveEntity } from '../../entity'
import { UserRole } from '../schemas'

const batchRemoveUserRole = batchRemoveEntity(UserRole)

export default batchRemoveUserRole
