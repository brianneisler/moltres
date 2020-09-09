import { fileExists } from '../../fs'
import { defn, find, map } from '../../lang'
import { pathJoin } from '../../path'

const CONFIG_FILE_NAMES = ['config.js', 'config.yaml', 'config.json']

const findConfigFileAtPath = defn(
  'findConfigFileAtPath',
  async (absolutePath) =>
    find(
      fileExists,
      map(
        (configFileName) => pathJoin(absolutePath, configFileName),
        CONFIG_FILE_NAMES
      )
    )
)

export default findConfigFileAtPath
