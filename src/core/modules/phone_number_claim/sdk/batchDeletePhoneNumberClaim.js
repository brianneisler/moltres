import { batchDeleteEntity } from '../../entity'
import { PhoneNumberClaim } from '../schemas'

const batchDeletePhoneNumberClaim = batchDeleteEntity(PhoneNumberClaim)

export default batchDeletePhoneNumberClaim
