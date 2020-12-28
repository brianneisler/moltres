import { pathJoin } from '../../../path'

import * as schemas from './schemas'
import * as sdk from './sdk'

const mod = () => ({
  rules: {
    firestore: pathJoin(__dirname, './firestore.rules')
  },
  schemas,
  sdk
})

export default mod
