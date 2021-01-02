import { actionBuilder } from '../../../../redux'
import { EmptyAction } from '../schemas'

const emptyAction = actionBuilder({
  Schema: EmptyAction
})

export default emptyAction
