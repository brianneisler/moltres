import { Algorithm } from '../constants'

import hash from './hash'

const hashSha256 = hash(Algorithm.SHA256)

export default hashSha256
