import AwesomePhoneNumber from 'awesome-phonenumber'

import { PhoneNumberCountries } from '../constants'

const formatPhoneNumber = (
  phoneNumber,
  country = PhoneNumberCountries.UnitedStates
) => {
  const number = new AwesomePhoneNumber(phoneNumber, country)
  return number.getNumber()
}

export default formatPhoneNumber
