import { batchCreateEntity } from '../../entity'
import { UserPhoneNumber } from '../schemas'

const batchCreateUserPhoneNumber = batchCreateEntity(UserPhoneNumber)

export default batchCreateUserPhoneNumber
