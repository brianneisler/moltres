import { loadProjectConfig } from '../config'
import { uuidv4 } from '../lang'
import { pathResolve } from '../path'

const setupTestConfig = async () => {
  return await loadProjectConfig(
    {
      cwd: pathResolve(__dirname, '..', '..'),
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
