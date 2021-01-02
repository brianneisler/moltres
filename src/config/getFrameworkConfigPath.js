import { homeDirectory } from '../fs'
import { pathJoin } from '../path'

const getFrameworkConfigPath = () => pathJoin(homeDirectory(), '.moltres')

export default getFrameworkConfigPath
