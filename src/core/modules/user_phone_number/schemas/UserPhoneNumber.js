import { Id } from '../../core'
import { Entity } from '../../entity'

const UserPhoneNumber = {
  collectionName: 'UserPhoneNumbers',
  idField: 'phoneNumberId',
  name: 'UserPhoneNumber',
  schema: Entity.schema.keys({
    phoneNumberId: Id.schema.required(),
    userId: Id.schema.required()
  })
}

export default UserPhoneNumber
