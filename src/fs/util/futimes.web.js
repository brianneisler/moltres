import { futimes as memFutimes } from 'memfs'

import { promisfy } from '../../lang'

const futimes = promisfy(memFutimes)

export default futimes
