import { createHmac } from 'crypto'

import { Algorithm } from '../constants'
import { curry, isString } from '../lang'

const hashHmacSha256 = curry((secret, data) => {
  const hmac = createHmac(Algorithm.SHA256, secret)
  if (isString(data)) {
    hmac.update(data)
    return hmac.digest('hex')
  }
  throw new Error('unsupported data type received by hashHmacSha256')
})

export default hashHmacSha256
