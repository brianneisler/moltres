import AwesomePhoneNumber from 'awesome-phonenumber'

import { PhoneNumberCountries } from '../constants'

const isValidPhoneNumber = (
  value,
  country = PhoneNumberCountries.UnitedStates
) => {
  try {
    const number = new AwesomePhoneNumber(value, country)
    return number.isValid()
  } catch (error) {
    return false
  }
}

export default isValidPhoneNumber
