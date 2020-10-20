import { readdir as memReaddir } from 'memfs'

import { promisfy } from '../../lang'

const readdir = promisfy(memReaddir)

export default readdir
