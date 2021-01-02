import { createBaseContext } from '../context'
import { uuidv4 } from '../lang'

const setupTestAnonymousContext = async (adminContext) => {
  const { config } = adminContext
  const { runId } = config.test
  const namespace = `anonymous:${uuidv4()}.test:${runId}`
  const source = `${config.api.url}/anonymous?test=${runId}`
  return createBaseContext({
    config,
    namespace,
    source
  })
}

export default setupTestAnonymousContext
