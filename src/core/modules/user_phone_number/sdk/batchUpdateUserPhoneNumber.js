import { batchUpdateEntity } from '../../entity'
import { UserPhoneNumber } from '../schemas'

const batchUpdateUserPhoneNumber = batchUpdateEntity(UserPhoneNumber)

export default batchUpdateUserPhoneNumber
