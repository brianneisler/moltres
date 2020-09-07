import findConfigFileAtPath from './findConfigFileAtPath'
import readConfigFile from './readConfigFile'
import resolveStagePath from './resolveStagePath'

const loadConfigFile = async (options) => {
  const absoluteStagePath = resolveStagePath(options)
  const configFilePath = await findConfigFileAtPath(absoluteStagePath)
  if (!configFilePath) {
    // eslint-disable-next-line no-console
    console.log(`could not find config file for stage '${options.stage}'`)
    return undefined
  }

  return await readConfigFile(configFilePath)
}

export default loadConfigFile
