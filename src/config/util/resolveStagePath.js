import { pathResolve } from '../../path'

const resolveStagePath = ({ cwd = process.cwd(), stage }) =>
  pathResolve(cwd, 'stages', stage)

export default resolveStagePath
