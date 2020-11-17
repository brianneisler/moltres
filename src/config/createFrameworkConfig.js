import { readFile } from '../fs'
import { uuidv4 } from '../lang'

import getFrameworkConfigPath from './getFrameworkConfigPath'

const createConfig = async () => {
  // const createdAt = Math.round(Date.now() / 1000),
  // const config = {
  //   frameworkId: uuid.v1(),
  //   meta: {
  //     createdAt,
  //     updatedAt: createdAt
  //   },
  //   trackingDisabled: false,
  //   userId: null
  // }
  // writeFileAtomic.sync(getServerlessrcPath(), JSON.stringify(config, null, 2))
  // return JSON.parse(await readFile(getServerlessrcPath()))
}

export default createConfig
