import { getDocumentById } from '../../../../db'
import { Event } from '../schemas'

const getEventById = getDocumentById(Event)

export default getEventById
