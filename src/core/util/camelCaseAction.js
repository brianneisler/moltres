import { splitMapJoin } from '../../lang'
import { camelCase } from '../../string'

const splitMapJoinCamelCase = splitMapJoin(camelCase)

const camelCaseAction = splitMapJoinCamelCase('/')

export default camelCaseAction
