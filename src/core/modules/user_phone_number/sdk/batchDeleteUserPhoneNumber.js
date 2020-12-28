import { batchDeleteEntity } from '../../entity'
import { UserPhoneNumber } from '../schemas'

const batchDeleteUserPhoneNumber = batchDeleteEntity(UserPhoneNumber)

export default batchDeleteUserPhoneNumber
