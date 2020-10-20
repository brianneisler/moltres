import { lstat as memLstat } from 'memfs'

import { promisfy } from '../../lang'

const lstat = promisfy(memLstat)

export default lstat
