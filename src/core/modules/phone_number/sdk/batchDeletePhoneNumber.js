import { batchDeleteEntity } from '../../entity'
import { PhoneNumber } from '../schemas'

const batchDeletePhoneNumber = batchDeleteEntity(PhoneNumber)

export default batchDeletePhoneNumber
