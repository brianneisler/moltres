import { batchDeleteEntity } from '../../entity'
import { InternalPhoneNumber } from '../schemas'

const batchDeleteInternalPhoneNumber = batchDeleteEntity(InternalPhoneNumber)

export default batchDeleteInternalPhoneNumber