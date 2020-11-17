import { deleteEntity } from '../../entity'
import { ServiceAccount } from '../schemas'

const deleteServiceAccount = deleteEntity(ServiceAccount)

export default deleteServiceAccount
