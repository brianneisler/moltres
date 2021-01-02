import { batchUpdateEntity } from '../../entity'
import { User } from '../schemas'

const batchUpdateUser = batchUpdateEntity(User)

export default batchUpdateUser
