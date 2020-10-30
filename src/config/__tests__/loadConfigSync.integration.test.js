import path from 'path'

import { readFile } from 'fs-extra'
import Joi from 'joi'
import { v4 as uuidv4 } from 'uuid'

import { outputFile, tmpDirectory } from '../../fs'
import loadConfigSync from '../loadConfigSync'

describe('loadConfigSync', () => {
  describe('stage:test', () => {
    let cwd
    let config
    let env

    beforeAll(async () => {
      config = await readFile(
        path.resolve(__dirname, 'stages', 'test', 'config.yaml'),
        'utf8'
      )
      env = await readFile(
        path.resolve(__dirname, 'stages', 'test', '.env'),
        'utf8'
      )
    })

    beforeEach(async () => {
      // NOTE BRN: These methods import from our own methods which will redirect
      // the code based on the extension overrides. This means that when we're
      // testing the .web.js extensions these methods will wrtie out to the
      // memfs system. Otherwise they'll write to disk.
      cwd = path.resolve(tmpDirectory(), 'tests', uuidv4())
      await outputFile(
        path.resolve(cwd, 'stages', 'test', 'config.yaml'),
        config
      )
      await outputFile(path.resolve(cwd, 'stages', 'test', '.env'), env)
    })

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
        cwd,
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
          cwd,
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
        cwd,
        stage: 'dne',
        target: 'cli'
      })

      expect(result).toEqual({
        stage: 'dne',
        target: 'cli'
      })
    })

    it('should drop sensitive values when dropSensitive is true', () => {
      const result = loadConfigSync({
        cwd,
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

    it('should merge with initialConfig', () => {
      const result = loadConfigSync(
        {
          cwd,
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

    it('should make context values available during evaluation', () => {
      const result = loadConfigSync(
        {
          cwd,
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
  })

  describe('stage:sensitive', () => {
    let cwd
    let config
    beforeAll(async () => {
      config = await readFile(
        path.resolve(__dirname, 'stages', 'sensitive', 'config.yaml'),
        'utf8'
      )
    })
    beforeEach(async () => {
      // NOTE BRN: These methods import from our own methods which will redirect
      // the code based on the extension overrides. This means that when we're
      // testing the .web.js extensions these methods will wrtie out to the
      // memfs system. Otherwise they'll write to disk.
      cwd = path.resolve(tmpDirectory(), 'tests', uuidv4())
      await outputFile(
        path.resolve(cwd, 'stages', 'sensitive', 'config.yaml'),
        config
      )
    })

    it('should drop all sensitive values when dropSensitive is true including nested values', () => {
      const result = loadConfigSync({
        cwd,
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
      const result = loadConfigSync({
        cwd,
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
})
