import { findDocumentById } from 'moltres/db'
import { User } from '../schemas'

const findUserById = findDocumentById(User)

export default findUserById
