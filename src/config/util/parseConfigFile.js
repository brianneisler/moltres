import YAML from 'js-yaml'

import { curry, merge } from '../../lang'
import { isJsonPath, isYamlPath } from '../../path'

const parseConfigFile = curry((filePath, contents, options = {}) => {
  if (isJsonPath(filePath)) {
    return JSON.parse(contents)
  } else if (isYamlPath(filePath)) {
    return YAML.load(
      contents.toString(),
      merge(options, { filename: filePath })
    )
  }
  return contents.toString().trim()
})

export default parseConfigFile
