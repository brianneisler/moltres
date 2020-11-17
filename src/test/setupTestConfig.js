import { loadProjectConfig } from '../config'
import { uuidv4 } from '../lang'

const setupTestConfig = async () => {
  return await loadProjectConfig(
    {
      target: TEST_TARGET
    },
    {
      test: {
        runId: uuidv4()
      }
    }
  )
}

export default setupTestConfig
