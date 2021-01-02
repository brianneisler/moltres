import { buildBatch, commitBatch, getFromRef } from '../../../../db'
import { curry } from '../../../../lang'

import batchSetEntity from './batchSetEntity'

const setEntity = curry(async (Schema, context, id, value, options = {}) => {
  let ref
  await commitBatch(
    buildBatch(context, async (batch) => {
      ref = await batchSetEntity(Schema, context, batch, id, value, options)
    })
  )
  return getFromRef(context, ref)
})

export default setEntity
