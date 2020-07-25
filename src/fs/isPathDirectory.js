import pathStat from './pathStat'

const isPathDirectory = async (path) => {
  const stat = await pathStat(path)
  return stat.isDirectory()
}

export default isPathDirectory
