import formatProtocol from './formatProtocol'
import formatSlashes from './formatSlashes'

const formatOrigin = (location) => {
  const { host, hostname, port, protocol } = location
  let origin = ''
  if (protocol) {
    origin += formatProtocol(location)
    if (formatSlashes(location)) {
      origin += '//'
    }
  }
  if (host) {
    origin += host
  } else if (hostname) {
    origin += hostname
  }

  if (port) {
    origin += `:${port}`
  }

  return origin
}

export default formatOrigin
