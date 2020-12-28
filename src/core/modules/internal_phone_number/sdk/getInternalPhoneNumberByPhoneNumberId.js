import { getDocumentById } from '../../../../db'
import { InternalPhoneNumber } from '../schemas'

const getInternalPhoneNumberByPhoneNumberId = getDocumentById(
  InternalPhoneNumber
)

export default getInternalPhoneNumberByPhoneNumberId
