import statPath from './statPath'

const isPathDirectory = async (path) => {
  const stat = await statPath(path)
  return stat.isDirectory()
}

export default isPathDirectory
