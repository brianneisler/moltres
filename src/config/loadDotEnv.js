import dotenv from 'dotenv'
import { readFileSync } from 'fs-extra'

import { prepend } from '../lang'
import { isPathAbsolute, pathResolve } from '../path'

const loadDotEnv = (envPath, options = {}) => {
  const { cwd } = options
  let { stage } = options
  if (!stage) {
    stage = process.env.STAGE
  }
  // eslint-disable-next-line no-console
  console.log(`stage is ${stage}`)
  let fileName = '.env'
  fileName += `-${stage}`
  let pathParts = [envPath, fileName]
  if (!isPathAbsolute(envPath)) {
    pathParts = prepend(cwd, pathParts)
  }
  const envFilePath = pathResolve(...pathParts)
  let loadedEnv = {}
  try {
    const data = readFileSync(envFilePath, 'utf8')
    // eslint-disable-next-line no-console
    console.log('Found .env file:', stage)
    const values = dotenv.parse(data)
    loadedEnv = {
      ...loadedEnv,
      ...values
    }
  } catch (error) {
    if (!error.message.includes('ENOENT')) {
      throw error
    }
  }
  return loadedEnv
}

export default loadDotEnv