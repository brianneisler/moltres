import symlink from './symlink'
import unlink from './unlink'

const copyLink = async (resolvedSrc, dest) => {
  await unlink(dest)
  return symlink(resolvedSrc, dest)
}

export default copyLink
