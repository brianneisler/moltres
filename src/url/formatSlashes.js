import formatProtocol from './formatProtocol'

const formatSlashes = (location) => {
  const { slashes } = location
  const formattedProtocol = formatProtocol(location)
  return (
    slashes ||
    formattedProtocol === 'http:' ||
    formattedProtocol === 'https:' ||
    formattedProtocol === 'ftp:' ||
    formattedProtocol === 'ftps:' ||
    formattedProtocol === 'gopher:' ||
    formattedProtocol === 'file:'
  )
}

export default formatSlashes
