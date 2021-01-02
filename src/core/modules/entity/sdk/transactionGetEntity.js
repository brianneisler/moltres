import { EntityChangeType } from '../../../../constants'
import {
  batchCreateDocument,
  batchCreateIndexes,
  cleanseData
} from '../../../../db'
import { curry } from '../../../../lang'
import { validateSchema } from '../../../../schema'
import { entityChangedAction } from '../actions'

import batchQueueEntityChangedAction from './batchQueueEntityChangedAction'

const batchCreateEntity = curry(
  (Schema, context, batch, value, options = {}) => {
    const data = validateSchema(Schema, cleanseData(Schema, value))
    const ref = batchCreateDocument(Schema, context, batch, data)
    batchCreateIndexes(Schema, context, batch, data, ref)

    if (!options.noChangeActions) {
      const action = entityChangedAction(context, {
        changeType: EntityChangeType.CREATE,
        data,
        entityId: ref.id,
        entityPath: ref.path,
        entityType: Schema.name,
        prevData: null
      })
      batchQueueEntityChangedAction(context, batch, action)
    }
    return ref
  }
)

export default batchCreateEntity
