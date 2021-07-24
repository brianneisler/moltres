import assoc from './assoc'
import { ImmutableMap } from './classes'
import getProperty from './getProperty'
import isImmutableMap from './isImmutableMap'
import keys from './keys'
import reduce from './reduce'
import replaceWildcards from './replaceWildcards'

const replacePropWildcards = (wildValues, object) =>
  reduce(
    (accum, prop) => assoc(replaceWildcards(wildValues, prop), getProperty(prop, object), accum),
    isImmutableMap(object) ? ImmutableMap({}) : {},
    keys(object)
  )

export default replacePropWildcards
