import {
  hashPhoneNumber,
  validateAndFormatPhoneNumber
} from '../../../../phone_number'

import findPhoneNumberIdByIndexPhoneNumberHash from './findPhoneNumberIdByIndexPhoneNumberHash'

// NOTE BRN: This does not have options because it is an index lookup, not a
// record lookup
const findPhoneNumberIdByPhoneNumber = async (
  context,
  unformattedPhoneNumber
) => {
  const phoneNumber = validateAndFormatPhoneNumber(unformattedPhoneNumber)
  const hash = hashPhoneNumber(phoneNumber)
  return findPhoneNumberIdByIndexPhoneNumberHash(context, hash)
}

export default findPhoneNumberIdByPhoneNumber
