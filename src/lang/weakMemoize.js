import { cacheChain } from './util'
import weakMemoizeWith from './weakMemoizeWith'

const weakMemoize = weakMemoizeWith(cacheChain)

export default weakMemoize
