import { select } from '../../../../lang'
import createContextSelector from '../../../createContextSelector'

const selectLoggerContext = select(createContextSelector('logger'))

export default selectLoggerContext
