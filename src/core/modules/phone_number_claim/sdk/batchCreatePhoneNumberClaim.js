import { batchCreateEntity } from '../../entity'
import { PhoneNumberClaim } from '../schemas'

const batchCreatePhoneNumberClaim = batchCreateEntity(PhoneNumberClaim)

export default batchCreatePhoneNumberClaim
