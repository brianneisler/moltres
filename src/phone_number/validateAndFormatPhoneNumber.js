import { PhoneNumberCountries } from '../constants'

import { newInvalidPhoneNumberException } from './exceptions'
import formatPhoneNumber from './formatPhoneNumber'
import isValidPhoneNumber from './isValidPhoneNumber'

/**
 * Validate that a phone number is valid for the given country and then return a
 * formatted phone number if so.
 *
 * @function
 * @since v0.6.0
 * @category phonenumber
 * @param {*} phoneNumber
 * @param {*} country
 * @returns {String} The formatted phone number
 */
const validateAndFormatPhoneNumber = (
  phoneNumber,
  country = PhoneNumberCountries.UnitedStates
) => {
  if (!isValidPhoneNumber(phoneNumber, country)) {
    throw newInvalidPhoneNumberException(phoneNumber)
  }
  return formatPhoneNumber(phoneNumber, country)
}

export default validateAndFormatPhoneNumber
