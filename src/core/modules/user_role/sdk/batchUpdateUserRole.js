import { batchUpdateEntity } from '../../entity'
import { UserRole } from '../schemas'

const batchUpdateUserRole = batchUpdateEntity(UserRole)

export default batchUpdateUserRole
