import { VARIABLE } from '../constants/Regex'

const hasVariableString = (value) => VARIABLE.test(value)

export default hasVariableString
