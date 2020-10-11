import formatProtocol from './formatProtocol'

const formatOrigin = ({ host, hostname, port, protocol, slashes }) => {
  let origin = ''
  if (protocol) {
    const formattedProtocol = formatProtocol({ protocol })
    origin += formattedProtocol
    if (
      slashes ||
      formattedProtocol === 'http:' ||
      formattedProtocol === 'https:' ||
      formattedProtocol === 'ftp:' ||
      formattedProtocol === 'ftps:' ||
      formattedProtocol === 'gopher:' ||
      formattedProtocol === 'file:'
    ) {
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
