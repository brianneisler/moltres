import { uuidv4, weakMemoize } from '../../lang'
import { pathJoin } from '../../path'

const homedir = weakMemoize(() => pathJoin('/', 'user', uuidv4()))

export default homedir
