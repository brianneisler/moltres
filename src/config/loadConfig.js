// TODO: Split this function into different versions based on ios, android and web
// import env from 'react-native-config'
import { mergeDeepRight } from '../lang'

import getStage from './util/getStage'
import getTarget from './util/getTarget'
import resolveConfigAndEnv from './util/resolveConfigAndEnv'
import updateEnv from './util/updateEnv'
import validateConfig from './util/validateConfig'

const loadConfig = async (options = {}, initialConfig = {}) => {
  const stage = getStage(options)
  const target = getTarget(options)

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
    // TODO BRN: dynamically require the needed modules here so that we avoid
    // loading node specific modules in the web environment
    const { loadConfigFile, loadDotEnv } = require('./util')

    env = loadDotEnv(options)
    config = loadConfigFile(options)
  }

  // TODO BRN: Load raw config and env and then resolve their values against
  // each other since they can cross reference each other

  ;({ config, env } = resolveConfigAndEnv({
    config: mergeDeepRight(initialConfig, config),
    env
  }))
  // TODO BRN: Validate config
  const { modules } = options
  if (modules) {
    validateConfig(modules, config)
  }

  updateEnv(env)

  return config
}

export default loadConfig
