import { readFile as memReadFile } from 'memfs'

import { promisfy } from '../../lang'

const readFile = promisfy(memReadFile)

export default readFile
