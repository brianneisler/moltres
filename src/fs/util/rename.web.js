import { rename as memRename } from 'memfs'

import { promisfy } from '../../lang'

const rename = promisfy(memRename)

export default rename
