import Joi from 'joi'

import validateConfig from './validateConfig'

describe('validateConfig', () => {
  it('should not throw error when config is correct', () => {
    const modules = {
      foo: {
        configSchema: {
          schema: Joi.object().keys({
            bar: Joi.string().required()
          })
        }
      }
    }
    const config = {
      foo: {
        bar: 'baz'
      }
    }
    validateConfig(modules, config)
  })

  it('should throw error when config is incorrect', () => {
    const modules = {
      foo: {
        configSchema: {
          schema: Joi.object().keys({
            bar: Joi.string().required()
          })
        }
      }
    }
    const config = {
      foo: {}
    }
    expect(() => validateConfig(modules, config)).toThrow()
  })
})
