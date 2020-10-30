// TODO: Split this function into different versions based on ios, android and web
// import env from 'react-native-config'
import { merge, mergeDeepRight } from '../lang'

import evaluateConfigAndEnv from './util/evaluateConfigAndEnv'
import getStage from './util/getStage'
import getTarget from './util/getTarget'
import updateEnv from './util/updateEnv'
import validateConfig from './util/validateConfig'

const loadConfigSync = (options = {}, initialConfig = {}, context = {}) => {
  const stage = getStage(options)
  const target = getTarget(options)

  initialConfig = merge({ stage, target }, initialConfig)
  let config
  let env
  if (target === 'web') {
    // NOTE BRN: We can't use fs here to load files and we shouldn't load the yaml
    // files in because they have sensitive data. Instead the config should be
    // precompiled and then injected into process.env
    config = process.env.MOLTRES_CONFIG
      ? JSON.parse(process.env.MOLTRES_CONFIG)
      : {}
    env = process.env.MOLTRES_ENV ? JSON.parse(process.env.MOLTRES_ENV) : {}
  } else {
    // NOTE BRN: dynamically require the needed modules here so that we avoid
    // loading node specific modules in the web environment
    const { loadConfigFileSync, loadDotEnvSync } = require('./util')

    env = loadDotEnvSync(options)
    config = loadConfigFileSync(options)

    const cwd = options.cwd || process.cwd()
    // Load raw config and env and then resolve their values against
    // each other since they can cross reference each other

    ;({ config, env } = evaluateConfigAndEnv(
      {
        config: mergeDeepRight(initialConfig, config || {}),
        env
      },
      options,
      mergeDeepRight({ project: { dir: cwd } }, context)
    ))
  }

  const { modules } = options
  if (modules) {
    validateConfig(modules, config)
  }
  if (target !== 'web') {
    updateEnv(env)
  }

  return config
}

export default loadConfigSync
