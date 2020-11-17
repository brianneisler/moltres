import { assocPath, invariant, isString } from '../lang'

import loadConfig from './loadConfig'

const loadProjectConfig = async (options, initialState = {}, context = {}) => {
  const { cwd, target } = options

  invariant(isString(cwd), 'cwd must be a defined String')
  invariant(isString(target), 'target must be a defined String')

  return await loadConfig(
    options,
    initialState,
    assocPath(['project', 'dir'], cwd, context)
  )
}

export default loadProjectConfig
