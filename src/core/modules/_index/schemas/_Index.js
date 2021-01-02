import { Object, String } from '../../core/schemas'

const Index = {
  collectionName: 'Index',
  name: 'Index',
  schema: Object.schema.keys({
    value: String.schema.required()
  })
}

export default Index
