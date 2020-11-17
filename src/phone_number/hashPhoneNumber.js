import { hashSha256 } from '../crypto'

import formatPhoneNumber from './formatPhoneNumber'

const hashPhoneNumber = (phoneNumber) => {
  const formatted = formatPhoneNumber(phoneNumber)
  return hashSha256(formatted)
}

export default hashPhoneNumber
