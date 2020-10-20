import { readlink as memReadlink } from 'memfs'

import { promisfy } from '../../lang'

const readlink = promisfy(memReadlink)

export default readlink
