import { access as memAccess } from 'memfs'

import { promisfy } from '../../lang'

const access = promisfy(memAccess)

export default access
