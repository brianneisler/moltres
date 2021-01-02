import { deleteEntity } from '../../entity'
import { UserRole } from '../schemas'

const deleteUserRole = deleteEntity(UserRole)

export default deleteUserRole
