import { symlink as memSymlink } from 'memfs'

import { promisfy } from '../../lang'

const symlink = promisfy(memSymlink)

export default symlink
