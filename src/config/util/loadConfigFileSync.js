import findConfigFileAtPathSync from './findConfigFileAtPath'
import readConfigFileSync from './readConfigFile'

const loadConfigFileSync = (configFileDirectory) => {
  const configFilePath = findConfigFileAtPathSync(configFileDirectory)
  if (!configFilePath) {
    return undefined
  }

  return readConfigFileSync(configFilePath)
}

export default loadConfigFileSync
