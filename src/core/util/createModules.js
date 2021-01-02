import { map } from '../../lang'

import createModule from './createModule'

const createModules = (context, creators) =>
  map((creator, name) => createModule(context, name, creator), creators)

export default createModules
