import {
  hashPhoneNumber,
  validateAndFormatPhoneNumber
} from '../../../../phone_number'

import findPhoneNumberByHash from './findPhoneNumberByHash'

const findPhoneNumberByPhoneNumber = async (
  context,
  unformattedPhoneNumber,
  options = {}
) => {
  const phoneNumber = validateAndFormatPhoneNumber(unformattedPhoneNumber)
  const hash = hashPhoneNumber(phoneNumber)
  return findPhoneNumberByHash(context, hash, options)
}

export default findPhoneNumberByPhoneNumber
