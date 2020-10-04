import assocPath from './assocPath'
import getProperty from './getProperty'
import keys from './keys'
import reduce from './reduce'

const assocMerge = (pathValues, props) =>
  reduce(
    (accum, path) => assocPath(path, getProperty(path, pathValues), accum),
    props,
    keys(pathValues)
  )

export default assocMerge
