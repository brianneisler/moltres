import { batchRemoveEntity } from '../../entity'
import { PhoneNumber } from '../schemas'

const batchRemovePhoneNumber = batchRemoveEntity(PhoneNumber)

export default batchRemovePhoneNumber
