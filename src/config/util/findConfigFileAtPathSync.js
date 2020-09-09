import { fileExistsSync } from '../../fs'
import { defn, find, map } from '../../lang'
import { pathJoin } from '../../path'

const CONFIG_FILE_NAMES = ['config.js', 'config.yaml', 'config.json']

const findConfigFileAtPathSync = defn(
  'findConfigFileAtPathSync',
  async (absolutePath) =>
    find(
      fileExistsSync,
      map(
        (configFileName) => pathJoin(absolutePath, configFileName),
        CONFIG_FILE_NAMES
      )
    )
)

export default findConfigFileAtPathSync
