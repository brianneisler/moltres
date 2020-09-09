import dotenv from 'dotenv'

import { readFile } from '../../fs'
import { defn } from '../../lang'
import { pathResolve } from '../../path'

import resolveStagePath from './resolveStagePath'

const FILE_NAME_ENV = '.env'

const loadDotEnv = defn('loadDotEnv', async (options) => {
  const envFilePath = pathResolve(resolveStagePath(options), FILE_NAME_ENV)
  let loadedEnv = {}
  try {
    const data = await readFile(envFilePath, 'utf8')
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
