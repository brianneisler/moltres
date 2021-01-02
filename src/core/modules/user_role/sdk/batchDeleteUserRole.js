import { batchDeleteEntity } from '../../entity'
import { UserRole } from '../schemas'

const batchDeleteUserRole = batchDeleteEntity(UserRole)

export default batchDeleteUserRole
