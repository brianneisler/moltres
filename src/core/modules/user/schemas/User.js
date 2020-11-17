import { String } from '../../core'
import { Entity } from '../../entity'

const User = {
  collectionName: 'Users',
  name: 'User',
  schema: Entity.schema.keys({
    name: String.schema,
    state: String.schema.valid('disabled', 'pending', 'valid').required(),
    uid: String.schema
  })
}

export default User
