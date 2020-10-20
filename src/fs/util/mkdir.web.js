import { mkdir as memMkdir } from 'memfs'

import { promisfy } from '../../lang'

const mkdir = promisfy(memMkdir)

export default mkdir
