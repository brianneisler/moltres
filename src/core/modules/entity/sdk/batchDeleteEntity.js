import { EntityChangeType } from '../../../../constants'
import { batchDeleteDocument, batchDeleteIndexes, refGet } from '../../../../db'
import { curry } from '../../../../lang'
import { entityChangedAction } from '../actions'

import batchQueueEntityChangedAction from './batchQueueEntityChangedAction'

const batchDeleteEntity = curry(
  async (Schema, context, batch, id, options = {}) => {
    const ref = batchDeleteDocument(Schema, context, batch, id)
    const refDoc = await refGet(context, ref)
    const prevData = refDoc.data()

    batchDeleteIndexes(Schema, context, batch, prevData)
    if (!options.noChangeActions) {
      const action = entityChangedAction(context, {
        changeType: EntityChangeType.DELETE,
        data: null,
        entityId: ref.id,
        entityPath: ref.path,
        entityType: Schema.name,
        prevData: prevData || null
      })
      batchQueueEntityChangedAction(context, batch, action)
    }
    return ref
  }
)

export default batchDeleteEntity
