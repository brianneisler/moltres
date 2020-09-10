import { expected } from '../../error'
import { forEach, getProp } from '../../lang'
import { validateSchema } from '../../schema'

const validateConfig = (modules, config) => {
  forEach((mod, name) => {
    if (mod.configSchema) {
      try {
        validateSchema(mod.configSchema, getProp(name, config))
      } catch (error) {
        // TOOD BRN: Use schema.describe to convert this into a more useful
        // error message that displays the expected shape of the config for this
        // module...
        // console.log(
        //   '(mod.configSchema.schema.describe():',
        //   mod.configSchema.schema.describe()
        // )
        throw expected({
          code: 'ConfigMissing',
          data: getProp(name, config),
          message: `Config missing for module '${name}'. ${error.message}`
        })
      }
    }
  }, modules)
}

export default validateConfig
