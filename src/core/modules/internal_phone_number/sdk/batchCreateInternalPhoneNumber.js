import { batchCreateEntity } from '../../entity'
import { InternalPhoneNumber } from '../schemas'

const batchCreateInternalPhoneNumber = batchCreateEntity(InternalPhoneNumber)

export default batchCreateInternalPhoneNumber
