import { Id } from '../../core'
import { Entity } from '../../entity'

const InternalPhoneNumber = {
  collectionName: 'InternalPhoneNumbers',
  idField: 'phoneNumberId',
  name: 'InternalPhoneNumber',
  schema: Entity.schema.keys({
    phoneNumberId: Id.schema.required()
  })
}

export default InternalPhoneNumber
