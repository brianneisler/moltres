import { chmod as memChmod } from 'memfs'

import { promisfy } from '../../lang'

const chmod = promisfy(memChmod)

export default chmod
