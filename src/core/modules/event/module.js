import { assocPath, merge } from '../../../lang'
import { decodeContentType } from '../../../request'

import * as schemas from './schemas'
import { ProcessEventAction } from './schemas'
import * as sdk from './sdk'
import { findEventById } from './sdk'

const createEventMiddleware = () => (store) => (next) => (action) => {
  if (action.type === ProcessEventAction.name) {
    // HACK BRN: the applyMiddleware function drops all other methods on the
    // store except for getState and dispatch. So we have to pull the context
    // from here...
    const { context } = store.getState()
    // TODO BRN: Replace this with auto action enrichment
    return findEventById(context, action.payload.eventId).then((event) => {
      const rawData = event.data
      event = merge(event, {
        data: decodeContentType(event.datacontenttype, event.data),
        rawData
      })

      action = assocPath(['payload', 'event'], event, action)
      return next(action)
    })
  }
  return next(action)
}

const handleEventRequest = (context, request, response) => {
  // TODO: Look for cloud event headers and process as a cloud event
}

const mod = () => ({
  handleEventRequest,
  middleware: [createEventMiddleware()],
  schemas,
  sdk
})

export default mod
