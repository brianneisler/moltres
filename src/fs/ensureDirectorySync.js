import { pathParse, pathResolve } from '../path'

import { mkdirSync } from './util'

const checkPath = (path) => {
  if (process.platform === 'win32') {
    const pathHasInvalidWinCharacters = /[<>:"|?*]/.test(path.replace(pathParse(path).root, ''))

    if (pathHasInvalidWinCharacters) {
      const error = new Error(`Path contains invalid characters: ${path}`)
      error.code = 'EINVAL'
      throw error
    }
  }
}

const processOptions = (options) => {
  const defaults = { mode: 0o777 }
  if (typeof options === 'number') {
    options = { mode: options }
  }
  return { ...defaults, ...options }
}

const ensureDirectorySync = (input, options) => {
  checkPath(input)
  options = processOptions(options)

  const pth = pathResolve(input)

  return mkdirSync(pth, {
    mode: options.mode,
    recursive: true,
  })
}

export default ensureDirectorySync
