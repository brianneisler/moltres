import { refDocumentById } from '../../../../db'
import { User } from '../schemas'

const refUserById = refDocumentById(User)

export default refUserById
