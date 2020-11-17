import { assocPath, invariant, isString } from '../lang'

import loadConfigSync from './loadConfigSync'

const loadProjectConfigSync = (options, initialState = {}, context = {}) => {
  const { cwd, target } = options

  invariant(isString(cwd), 'cwd must be a defined String')
  invariant(isString(target), 'target must be a defined String')

  return loadConfigSync(
    options,
    initialState,
    assocPath(['project', 'dir'], cwd, context)
  )
}

export default loadProjectConfigSync
