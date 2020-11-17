import { refDocumentById } from 'moltres/db'
import { User } from '../schemas'

const refUserById = refDocumentById(User)

export default refUserById
