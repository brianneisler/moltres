import findConfigFileAtPath from './findConfigFileAtPath'
import getStage from './getStage'
import readConfigFile from './readConfigFile'
import resolveProjectStagePath from './resolveProjectStagePath'

const loadProjectConfigFile = async (options) => {
  const absoluteStagePath = resolveProjectStagePath(options)
  const configFilePath = await findConfigFileAtPath(absoluteStagePath)
  if (!configFilePath) {
    // eslint-disable-next-line no-console
    console.log(`could not find config file for stage '${getStage(options)}'`)
    return undefined
  }

  return await readConfigFile(configFilePath)
}

export default loadProjectConfigFile
