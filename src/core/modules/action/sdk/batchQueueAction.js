import { addTimestamps, collection } from '../../../../db'
import { curry, omit } from '../../../../lang'
import { validateSchema } from '../../../../schema'
import { Action } from '../schemas'

const batchQueueAction = curry((Schema, context, batch, value) => {
  const data = validateSchema(Schema, value)
  const Actions = collection(Action, omit(['parentRef'], context))
  const ref = Actions.doc(`${data.type}/queue/${data.id}`)

  batch.set(ref, addTimestamps(context, { action: data }))

  return ref
})

export default batchQueueAction
