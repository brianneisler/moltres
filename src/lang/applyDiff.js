import __ from './__'
import assocPath from './assocPath'
import curry from './curry'
import dissocPath from './dissocPath'
import pipe from './pipe'
import reduce from './reduce'

const applyDiff = curry((diff, object) =>
  pipe(
    reduce((accum, { path, value }) => assocPath(path, value, accum), __, diff.assocs),
    reduce((accum, { path }) => dissocPath(path, accum), __, diff.dissocs)
  )(object)
)

export default applyDiff
