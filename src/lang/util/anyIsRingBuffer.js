import anyIsFunction from './anyIsFunction'

const anyIsRingBuffer = (value) =>
  !!value && anyIsFunction(value.isEmpty) && anyIsFunction(value.take) && anyIsFunction(value.put)

export default anyIsRingBuffer
