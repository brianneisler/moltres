import { close as memClose } from 'memfs'

import { promisfy } from '../../lang'

const close = promisfy(memClose)

export default close
