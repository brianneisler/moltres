import { actionBuilder } from '../../../../redux'
import { UncaughtExceptionAction } from '../schemas'

const uncaughtExceptionAction = actionBuilder({
  Schema: UncaughtExceptionAction
})

export default uncaughtExceptionAction
