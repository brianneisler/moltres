import { forEach, getProp } from '../../lang'
import { validateSchema } from '../../schema'

const validateConfig = (modules, config) => {
  forEach((mod, name) => {
    if (mod.configSchema) {
      validateSchema(mod.configSchema, getProp(name, config))
    }
  }, modules)
}

export default validateConfig
