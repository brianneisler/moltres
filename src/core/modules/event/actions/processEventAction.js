import { actionBuilder } from '../../../../redux'
import { ProcessEventAction } from '../schemas'

const processEventAction = actionBuilder({
  Schema: ProcessEventAction
})

export default processEventAction
