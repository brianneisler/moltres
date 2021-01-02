import { actionBuilder } from '../../../../redux'
import { MergeContextAction } from '../schemas'

const mergeContextAction = actionBuilder({
  Schema: MergeContextAction
})

export default mergeContextAction
