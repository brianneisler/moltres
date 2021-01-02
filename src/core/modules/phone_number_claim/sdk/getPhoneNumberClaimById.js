import { getDocumentById } from '../../../../db'
import { PhoneNumberClaim } from '../schemas'

const getPhoneNumberClaimById = getDocumentById(PhoneNumberClaim)

export default getPhoneNumberClaimById
