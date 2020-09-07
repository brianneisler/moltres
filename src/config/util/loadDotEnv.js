import dotenv from 'dotenv'

import { readFileSync } from '../../fs'
import { defn } from '../../lang'
import { pathResolve } from '../../path'

import resolveStagePath from './resolveStagePath'

const FILE_NAME_ENV = '.env'

const loadDotEnv = defn((options) => {
  const envFilePath = pathResolve(resolveStagePath(options), FILE_NAME_ENV)
  let loadedEnv = {}
  try {
    const data = readFileSync(envFilePath, 'utf8')
    const values = dotenv.parse(data)
    loadedEnv = values
  } catch (error) {
    if (!error.message.includes('ENOENT')) {
      throw error
    }
  }
  return loadedEnv
})

export default loadDotEnv
