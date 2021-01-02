import { fstat as memFstat } from 'memfs'

import { promisfy } from '../../lang'

const fstat = promisfy(memFstat)

export default fstat
