import { VARIABLE } from '../constants/Symbol'

const isVariable = (value) => !!value && !!value[VARIABLE]

export default isVariable
