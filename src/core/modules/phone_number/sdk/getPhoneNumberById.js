import { getDocumentById } from '../../../../db'
import { PhoneNumber } from '../schemas'

const getPhoneNumberById = getDocumentById(PhoneNumber)

export default getPhoneNumberById
