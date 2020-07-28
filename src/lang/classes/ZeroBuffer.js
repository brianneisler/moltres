class ZeroBuffer {
  isEmpty() {
    return true
  }

  put() {}

  take() {
    return []
  }
}

export default ZeroBuffer
