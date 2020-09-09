import { readFileSync } from '../../fs'

import parseConfigFile from './parseConfigFile'

const readConfigFile = (filePath, options = {}) => {
  // TODO BRN: Add a check for .js file. If a .js file, require it instead of
  // reading it.
  const contents = readFileSync(filePath, 'utf8')
  return parseConfigFile(filePath, contents, options)
}

export default readConfigFile
