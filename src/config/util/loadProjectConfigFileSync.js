import findConfigFileAtPathSync from './findConfigFileAtPathSync'
import getStage from './getStage'
import readConfigFileSync from './readConfigFileSync'
import resolveProjectStagePath from './resolveProjectStagePath'

const loadProjectConfigFileSync = (options) => {
  const absoluteStagePath = resolveProjectStagePath(options)
  const configFilePath = findConfigFileAtPathSync(absoluteStagePath)
  if (!configFilePath) {
    // eslint-disable-next-line no-console
    console.log(`could not find config file for stage '${getStage(options)}'`)
    return undefined
  }

  return readConfigFileSync(configFilePath)
}

export default loadProjectConfigFileSync
