import { eventChannel, expandingBuffer } from '../../../../redux'
import { getWindow } from '../../../../web'

const createUnhandledRejectionChannel = () => {
  return eventChannel((emitter) => {
    const listener = (event) => {
      event.preventDefault()
      emitter(event.detail)
    }
    getWindow().addEventListener('unhandledrejection', listener)
    return () => {
      getWindow().removeEventListener('unhandledrejection', listener)
    }
  }, expandingBuffer(1))
}

export default createUnhandledRejectionChannel