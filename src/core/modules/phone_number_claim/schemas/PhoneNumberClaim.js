import { Id } from '../../core'
import { Entity } from '../../entity'

const PhoneNumberClaim = {
  collectionName: 'PhoneNumberClaims',
  indexes: [['phoneNumberId']],
  name: 'PhoneNumberClaim',
  schema: Entity.schema.keys({
    phoneNumberId: Id.schema.required(),
    userId: Id.schema.required()
  })
}

export default PhoneNumberClaim
