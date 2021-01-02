import { realpath as memRealpath } from 'memfs'

import { promisfy } from '../../lang'

const realpath = promisfy(memRealpath)

export default realpath
