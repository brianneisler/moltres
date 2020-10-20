import fileUtimesMillis from './fileUtimesMillis'
import { chmod, copyFile as fsCopyFile, stat } from './util'

const fileIsNotWritable = (srcMode) => (srcMode & 0o200) === 0

const makeFileWritable = async (dest, srcMode) => chmod(dest, srcMode | 0o200)

const setDestTimestamps = async (src, dest) => {
  // The initial srcStat.atime cannot be trusted
  // because it is modified by the read(2) system call
  // (See https://nodejs.org/api/fs.html#fs_stat_time_values)
  const updatedSrcStat = await stat(src)
  return fileUtimesMillis(dest, updatedSrcStat.atime, updatedSrcStat.mtime)
}

const setDestTimestampsAndMode = async (srcMode, src, dest) => {
  await setDestTimestamps(src, dest)
  return chmod(dest, srcMode)
}

const handleTimestampsAndMode = async (srcMode, src, dest) => {
  // Make sure the file is writable before setting the timestamp
  // otherwise open fails with EPERM when invoked with 'r+'
  // (through utimes call)
  if (fileIsNotWritable(srcMode)) {
    await makeFileWritable(dest, srcMode)
  }
  return setDestTimestampsAndMode(srcMode, src, dest)
}

const copyFile = async (srcStat, src, dest, options) => {
  await fsCopyFile(src, dest)

  if (options.preserveTimestamps) {
    return handleTimestampsAndMode(srcStat.mode, src, dest)
  }
  return chmod(dest, srcStat.mode)
}

export default copyFile
