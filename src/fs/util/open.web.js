import { open as memOpen } from 'memfs'

import { promisfy } from '../../lang'

const open = promisfy(memOpen)

export default open
