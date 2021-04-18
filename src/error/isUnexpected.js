import isExpected from './isExpected'

const isUnexpected = (value) => !isExpected(value)

export default isUnexpected
