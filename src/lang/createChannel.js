import { unexpected } from '../error'

import createExpandingBuffer from './createExpandingBuffer'
import invariant from './invariant'
import {
  anyIsObserver,
  anyIsRingBuffer,
  anyIsUndefined,
  arrayRemove
} from './util'

const createChannel = (buffer = createExpandingBuffer()) => {
  let closed = false
  let observers = []

  if (process.env.NODE_ENV !== 'production') {
    invariant(anyIsRingBuffer(buffer), 'buffer must be a RingBuffer')
  }

  function checkForbiddenStates() {
    if (closed && observers.length) {
      throw unexpected({
        message: 'Cannot have a closed channel with pending observers'
      })
    }
    if (observers.length && !buffer.isEmpty()) {
      throw unexpected({
        message: 'Cannot have pending observers with non empty buffer'
      })
    }
  }

  function put(input) {
    if (process.env.NODE_ENV !== 'production') {
      checkForbiddenStates()
      invariant(!anyIsUndefined(input), 'input was undefined')
    }

    if (closed) {
      return
    }
    if (observers.length === 0) {
      return buffer.put(input)
    }
    const observer = observers.shift()
    observer.next(input)
  }

  function next(observer) {
    if (process.env.NODE_ENV !== 'production') {
      checkForbiddenStates()
      invariant(
        anyIsObserver(observer),
        "channel.take's observer must be an Observer"
      )
    }

    if (closed && buffer.isEmpty()) {
      observer.complete()
    } else if (!buffer.isEmpty()) {
      observer.next(buffer.take())
    } else {
      observers.push(observer)
      return () => {
        arrayRemove(observers, (value) => value === observer)
      }
    }
  }

  function flush(observer) {
    if (process.env.NODE_ENV !== 'production') {
      checkForbiddenStates()
      invariant(
        anyIsObserver(observer),
        "channel.flush's observer must be a Observer"
      )
    }

    if (closed && buffer.isEmpty()) {
      observer.complete()
      return
    }
    observer.next(buffer.flush())
  }

  function close() {
    if (process.env.NODE_ENV !== 'production') {
      checkForbiddenStates()
    }

    if (closed) {
      return
    }

    closed = true

    const arr = observers
    observers = []

    for (let i = 0, len = arr.length; i < len; i++) {
      const observer = arr[i]
      observer.complete()
    }
  }

  return {
    close,
    flush,
    next,
    put
  }
}

export default createChannel
