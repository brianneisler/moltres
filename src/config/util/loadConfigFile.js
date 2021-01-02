import findConfigFileAtPath from './findConfigFileAtPath'
import readConfigFile from './readConfigFile'

const loadConfigFile = async (configFileDirectory) => {
  const configFilePath = await findConfigFileAtPath(configFileDirectory)
  if (!configFilePath) {
    return undefined
  }

  return await readConfigFile(configFilePath)
}

export default loadConfigFile
