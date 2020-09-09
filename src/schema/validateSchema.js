import Joi from 'joi'

import { curry } from '../lang'

const validateSchema = curry(({ schema }, data) => {
  // TODO BRN: Figure out why we were making a copy of the data here before
  // validating the schema
  // data = reduce(
  //   (accum, key) => assocPath(createPath(key), getProp(key, data), accum),
  //   {},
  //   keys(data)
  // )
  return Joi.attempt(data, schema)
})

export default validateSchema
