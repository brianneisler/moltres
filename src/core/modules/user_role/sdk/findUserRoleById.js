import { findDocumentById } from '../../../../db'
import { UserRole } from '../schemas'

const findUserRoleById = findDocumentById(UserRole)

export default findUserRoleById
