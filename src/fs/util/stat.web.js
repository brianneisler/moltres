import { stat as memStat } from 'memfs'

import { promisfy } from '../../lang'

const stat = promisfy(memStat)

export default stat
