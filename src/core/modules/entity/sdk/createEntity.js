import { buildBatch, commitBatch, getFromRef } from '../../../../db'
import { curry } from '../../../../lang'

import batchCreateEntity from './batchCreateEntity'

const createEntity = curry(async (Schema, context, value, options = {}) => {
  let ref
  const builtBatch = await buildBatch(context, (batch) => {
    ref = batchCreateEntity(Schema, context, batch, value, options)
  })
  await commitBatch(builtBatch)
  return await getFromRef(context, ref)
})

export default createEntity
