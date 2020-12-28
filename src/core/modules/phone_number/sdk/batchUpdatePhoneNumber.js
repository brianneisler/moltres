import { batchUpdateEntity } from '../../entity'
import { PhoneNumber } from '../schemas'

const batchUpdatePhoneNumber = batchUpdateEntity(PhoneNumber)

export default batchUpdatePhoneNumber
