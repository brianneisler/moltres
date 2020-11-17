import { select } from '../../../../lang'
import createConfigSelector from '../../../createConfigSelector'

const selectSSRConfig = select(createConfigSelector('ssr'))

export default selectSSRConfig
