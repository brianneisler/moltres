import { writeFile as memWriteFile } from 'memfs'

import { promisfy } from '../../lang'

const writeFile = promisfy(memWriteFile)

export default writeFile
