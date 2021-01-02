import { unlinkSync } from './util'

const unlockFileSync = async (path) => {
  const lockPath = `${path}.lock`
  return unlinkSync(lockPath)
}

export default unlockFileSync
