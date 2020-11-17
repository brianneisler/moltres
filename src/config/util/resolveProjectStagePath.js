import { pathResolve } from '../../path'

import getCwd from './getCwd'
import getStage from './getStage'

const resolveProjectStagePath = (options) => {
  const stage = getStage(options)
  const cwd = getCwd(options)
  return pathResolve(cwd, 'stages', stage)
}

export default resolveProjectStagePath
