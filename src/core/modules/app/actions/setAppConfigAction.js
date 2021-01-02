import { actionBuilder } from '../../../../redux'
import { SetAppConfigAction } from '../schemas'

const setAppConfigAction = actionBuilder({
  Schema: SetAppConfigAction
})

export default setAppConfigAction
