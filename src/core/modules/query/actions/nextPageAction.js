import { actionBuilder } from '../../../../redux'
import { NextPageAction } from '../schemas'

const nextPageAction = actionBuilder({
  Schema: NextPageAction
})

export default nextPageAction
