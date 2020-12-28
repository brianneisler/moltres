import { buildBatch, commitBatch } from '../../../../db'
import { all } from '../../../../lang'
import { batchDeletePhoneNumber } from '../../phone_number'

import batchDeleteInternalPhoneNumber from './batchDeleteInternalPhoneNumber'

const deleteInternalPhoneNumber = async (context, id) =>
  commitBatch(
    buildBatch(context, async (batch) => {
      await all([
        batchDeletePhoneNumber(context, batch, id),
        batchDeleteInternalPhoneNumber(context, batch, id)
      ])
    })
  )

export default deleteInternalPhoneNumber
