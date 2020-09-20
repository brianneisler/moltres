import os from 'os'

import Joi from 'joi'

import loadConfig from '../loadConfig'

describe('loadConfig', () => {
  it('should load config and resolve all variables', async () => {
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

    const result = await loadConfig({
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
      ping: 'pong',
      stage: 'test',
      target: 'cli'
    })
  })

  it('should throw when config does not match schema', async () => {
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

    await expect(
      loadConfig({
        cwd: __dirname,
        modules,
        stage: 'test',
        target: 'cli'
      })
    ).rejects.toEqual(
      expect.objectContaining({
        code: 'ConfigMissing'
      })
    )
  })

  it('should load return empty object when stage does not exist and no validation', async () => {
    const result = await loadConfig({
      cwd: os.tmpdir(),
      stage: 'test',
      target: 'cli'
    })

    expect(result).toEqual({
      stage: 'test',
      target: 'cli'
    })
  })

  it('should drop sensitive values when dropSensitive is true', async () => {
    const result = await loadConfig({
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
      },
      stage: 'test',
      target: 'cli'
    })
  })

  it('should merge with initialConfig', async () => {
    const result = await loadConfig(
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
      ping: 'pong',
      stage: 'test',
      target: 'cli'
    })
  })

  it('should make context values available during evaluation', async () => {
    const result = await loadConfig(
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
      ping: 'pong',
      stage: 'test',
      target: 'cli'
    })
  })

  it('should drop all sensitive values when dropSensitive is strue including nested values', async () => {
    const result = await loadConfig({
      cwd: __dirname,
      dropSensitive: true,
      stage: 'sensitive',
      target: 'cli'
    })

    expect(result).toEqual({
      foo: 'bar',
      stage: 'sensitive',
      target: 'cli'
    })
  })

  it('should retain all sensitive values when dropSensitive is false', async () => {
    const result = await loadConfig({
      cwd: __dirname,
      dropSensitive: false,
      stage: 'sensitive',
      target: 'cli'
    })

    expect(result).toEqual({
      ding: {
        dong: 'bong',
        ring: 'wrong'
      },
      foo: 'bar',
      ping: 'pong',
      stage: 'sensitive',
      target: 'cli'
    })
  })
})
