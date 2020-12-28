import {
  hashPhoneNumber,
  validateAndFormatPhoneNumber
} from '../../../../phone_number'
import { batchCreateEntity } from '../../entity'
import { PhoneNumber } from '../schemas'

const batchCreatePhoneNumber = (context, batch, data) => {
  const phoneNumber = validateAndFormatPhoneNumber(data.phoneNumber)
  const hash = hashPhoneNumber(phoneNumber)

  return batchCreateEntity(PhoneNumber, context, batch, {
    ...data,
    hash,
    phoneNumber
  })
}

export default batchCreatePhoneNumber
