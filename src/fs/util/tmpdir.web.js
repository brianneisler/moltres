import { uuidv4 } from '../../lang'
import { pathJoin } from '../../path'

const tmpdir = () => pathJoin('/', 'tmp', uuidv4())

export default tmpdir
