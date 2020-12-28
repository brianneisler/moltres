import { getDocumentById } from '../../../../db'
import { User } from '../schemas'

const getUserById = getDocumentById(User)

export default getUserById
