import { batchCreateEntity } from '../../entity'
import { UserRole } from '../schemas'

const batchCreateUserRole = batchCreateEntity(UserRole)

export default batchCreateUserRole
