import { EntityChangeType } from '../../../../constants'
import {
  batchSetDocument,
  batchSetIndexes,
  cleanseData,
  refDocumentById,
  refGet
} from '../../../../db'
import { curry } from '../../../../lang'
import { validateSchema } from '../../../../schema'
import { entityChangedAction } from '../actions'

import batchQueueEntityChangedAction from './batchQueueEntityChangedAction'

const batchSetEntity = curry(
  async (Schema, context, batch, id, value, options = {}) => {
    const data = validateSchema(Schema, cleanseData(Schema, value))
    const ref = refDocumentById(Schema, context, id)
    const document = await refGet(context, ref)

    batchSetDocument(Schema, context, batch, id, data, document)
    batchSetIndexes(Schema, context, batch, data, document)
    if (!options.noChangeActions) {
      batchQueueEntityChangedAction(
        context,
        batch,
        entityChangedAction(context, {
          changeType: EntityChangeType.SET,
          data,
          entityId: ref.id,
          entityPath: ref.path,
          entityType: Schema.name,
          prevData: document.data() || null
        })
      )
    }

    return ref
  }
)

export default batchSetEntity
