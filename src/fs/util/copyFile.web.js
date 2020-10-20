import { copyFile as memCopyFile } from 'memfs'

import { promisfy } from '../../lang'

const copyFile = promisfy(memCopyFile)

export default copyFile
