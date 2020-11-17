import { deleteEntity } from '../../entity'
import { User } from '../schemas'

const deleteUser = deleteEntity(User)

export default deleteUser
