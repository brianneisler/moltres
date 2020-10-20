import { access } from './util'

const pathExists = async (path) =>
  access(path)
    .then(() => true)
    .catch(() => false)

export default pathExists
