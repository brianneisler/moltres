import { isValidPhoneNumber } from '../phone_number'

const validatePhoneNumber = (value) =>
  isValidPhoneNumber(value) ? undefined : 'Must be a valid phone number'

export default validatePhoneNumber
