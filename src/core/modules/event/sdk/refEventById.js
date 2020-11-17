import { refDocumentById } from '../../../../db'
import { Event } from '../schemas'

const refEventById = refDocumentById(Event)

export default refEventById
