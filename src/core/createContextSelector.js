import { createSelector, select } from '../lang'

import { selectContext } from './modules/context/selectors'

const createContextSelector = (selector) =>
  createSelector(selectContext, select(selector))

export default createContextSelector
