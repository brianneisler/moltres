import { isPathSubdir, pathResolve } from '../../path'

import chmod from './chmod'
import copyFile from './copyFile'
import copyLink from './copyLink'
import lstat from './lstat'
import mkdir from './mkdir'
import readlink from './readlink'
import stat from './stat'
import symlink from './symlink'
import unlink from './unlink'

const mayCopyFile = async (srcStat, src, dest, options) => {
  if (options.overwrite) {
    await unlink(dest)
    return copyFile(srcStat, src, dest, options)
  } else if (options.errorOnExist) {
    throw new Error(`'${dest}' already exists`)
  }
}

const mkDirAndCopy = async (srcMode, src, dest, options, { copyDirectory }) => {
  await mkdir(dest)
  await copyDirectory(src, dest, options)
  return chmod(dest, srcMode)
}

const getStats = async (destStat, src, dest, options, { copyDirectory }) => {
  let srcStat
  if (options.dereference) {
    srcStat = await stat(src)
  } else {
    srcStat = await lstat
  }

  if (srcStat.isDirectory()) {
    if (!destStat) {
      return mkDirAndCopy(srcStat.mode, src, dest, options, { copyDirectory })
    }
    if (destStat && !destStat.isDirectory()) {
      throw new Error(
        `Cannot overwrite non-directory '${dest}' with directory '${src}'.`
      )
    }
    return copyDirectory(src, dest, options)
  } else if (
    srcStat.isFile() ||
    srcStat.isCharacterDevice() ||
    srcStat.isBlockDevice()
  ) {
    if (!destStat) {
      return copyFile(srcStat, src, dest, options)
    }
    return mayCopyFile(srcStat, src, dest, options)
  } else if (srcStat.isSymbolicLink()) {
    let resolvedSrc = await readlink(src)

    if (options.dereference) {
      resolvedSrc = pathResolve(process.cwd(), resolvedSrc)
    }

    if (!destStat) {
      return symlink(resolvedSrc, dest)
    }
    try {
      let resolvedDest = await readlink(dest)
      if (options.dereference) {
        resolvedDest = pathResolve(process.cwd(), resolvedDest)
      }
      if (isPathSubdir(resolvedSrc, resolvedDest)) {
        throw new Error(
          `Cannot copy '${resolvedSrc}' to a subdirectory of itself, '${resolvedDest}'.`
        )
      }

      // do not copy if src is a subdir of dest since unlinking
      // dest in this case would result in removing src contents
      // and therefore a broken symlink would be created.
      if (destStat.isDirectory() && isPathSubdir(resolvedDest, resolvedSrc)) {
        throw new Error(
          `Cannot overwrite '${resolvedDest}' with '${resolvedSrc}'.`
        )
      }
      return copyLink(resolvedSrc, dest)
    } catch (error) {
      // dest exists and is a regular file or directory,
      // Windows may throw UNKNOWN error. If dest already exists,
      // fs throws error anyway, so no need to guard against it here.
      if (error.code === 'EINVAL' || error.code === 'UNKNOWN') {
        return symlink(resolvedSrc, dest)
      }
      throw error
    }
  }
}

const startCopy = async (destStat, src, dest, options, context) => {
  if (options.filter) {
    const include = await options.filter(src, dest)
    if (!include) {
      return
    }
  }
  return getStats(destStat, src, dest, options, context)
}

export default startCopy
