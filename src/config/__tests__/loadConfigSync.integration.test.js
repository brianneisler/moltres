import os from 'os'

import Joi from 'joi'

import loadConfigSync from '../loadConfigSync'

describe('loadConfigSync', () => {
  it('should load config and resolve all variables', () => {
    const modules = {
      bim: {
        configSchema: {
          schema: Joi.object()
            .keys({
              bop: Joi.string().required()
            })
            .required()
        }
      },
      foo: {
        configSchema: {
          schema: Joi.object()
            .keys({
              bar: Joi.string().required(),
              baz: Joi.string().required()
            })
            .required()
        }
      }
    }

    const result = loadConfigSync({
      cwd: __dirname,
      modules,
      stage: 'test',
      target: 'cli'
    })

    expect(result).toEqual({
      bim: {
        bop: 'bopity'
      },
      foo: {
        bar: 'barred',
        baz: 'bopity'
      },
      ping: 'pong'
    })
  })

  it('should throw when config does not match schema', () => {
    const modules = {
      bim: {
        configSchema: {
          schema: Joi.object()
            .keys({
              bop: Joi.string().required()
            })
            .required()
        }
      },
      foo: {
        configSchema: {
          schema: Joi.object()
            .keys({
              bar: Joi.string().required(),
              baz: Joi.string().required()
            })
            .required()
        }
      },
      missing: {
        configSchema: {
          schema: Joi.object()
            .keys({
              missing: Joi.string().required()
            })
            .required()
        }
      }
    }

    expect(() =>
      loadConfigSync({
        cwd: __dirname,
        modules,
        stage: 'test',
        target: 'cli'
      })
    ).toThrow(
      expect.objectContaining({
        code: 'ConfigMissing'
      })
    )
  })

  it('should load return empty object when stage does not exist and no validation', () => {
    const result = loadConfigSync({
      cwd: os.tmpdir(),
      stage: 'test',
      target: 'cli'
    })

    expect(result).toEqual({})
  })

  it('should drop sensitive values when dropSensitive is true', () => {
    const result = loadConfigSync({
      cwd: __dirname,
      dropSensitive: true,
      stage: 'test',
      target: 'cli'
    })

    expect(result).toEqual({
      bim: {
        bop: 'bopity'
      },
      foo: {
        bar: 'barred',
        baz: 'bopity'
      }
    })
  })

  it('should merge with initialConfig', () => {
    const result = loadConfigSync(
      {
        cwd: __dirname,
        stage: 'test',
        target: 'cli'
      },
      {
        baz: 'bazzer'
      }
    )

    expect(result).toEqual({
      baz: 'bazzer',
      bim: {
        bop: 'bopity'
      },
      foo: {
        bar: 'barred',
        baz: 'bopity'
      },
      ping: 'pong'
    })
  })

  it('should make context values available during evaluation', () => {
    const result = loadConfigSync(
      {
        cwd: __dirname,
        stage: 'test',
        target: 'cli'
      },
      {
        baz: '${blop}'
      },
      {
        blop: 'blip'
      }
    )

    expect(result).toEqual({
      baz: 'blip',
      bim: {
        bop: 'bopity'
      },
      foo: {
        bar: 'barred',
        baz: 'bopity'
      },
      ping: 'pong'
    })
  })
})
