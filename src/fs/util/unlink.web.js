import { unlink as memUnlink } from 'memfs'

import { promisfy } from '../../lang'

const unlink = promisfy(memUnlink)

export default unlink
