import { unlink } from './util'

const unlockFile = async (path) => {
  const lockPath = `${path}.lock`
  return await unlink(lockPath)
}

export default unlockFile
