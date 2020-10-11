import formatAuth from './formatAuth'
import formatHash from './formatHash'
import formatPathname from './formatPathname'
import formatProtocol from './formatProtocol'
import formatSearch from './formatSearch'

const formatHref = (location) => {
  const {
    hash,
    host,
    hostname,
    port,
    protocol,
    query,
    search,
    slashes,
    username
  } = location

  let href = ''
  if (protocol) {
    const formattedProtocol = formatProtocol(location)
    href += formattedProtocol
    if (
      slashes ||
      formattedProtocol === 'http:' ||
      formattedProtocol === 'https:' ||
      formattedProtocol === 'ftp:' ||
      formattedProtocol === 'ftps:' ||
      formattedProtocol === 'gopher:' ||
      formattedProtocol === 'file:'
    ) {
      href += '//'
    }
  }
  if (username && (host || hostname)) {
    href += `${formatAuth(location)}@`
  }
  if (host) {
    href += host
  } else if (hostname) {
    href += hostname
  }

  if (port) {
    href += `:${port}`
  }

  const formattedPathname = formatPathname(location)
  if (formattedPathname) {
    href += formattedPathname
  }

  if (search || query) {
    href += formatSearch(location)
  }

  if (hash) {
    href += formatHash(location)
  }

  return href
}

export default formatHref
