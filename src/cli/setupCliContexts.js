import { signInWithIdToken } from '../auth'
import { isTestAppConfigured, loadProjectConfig } from '../config'
import { createAdminContext, createBaseContext } from '../context'
import { uuidv4 } from '../lang'
import { processCwd } from '../process'

// TODO BRN: This should load authentication for the moltres platform from
// global config. It should also try to load project config
const setupCliContexts = async (modules) => {
  const config = await loadProjectConfig({
    cwd: processCwd(),
    modules,
    target: 'cli'
  })
  const namespace = uuidv4()
  const adminContext = await createAdminContext({
    config,
    namespace: `admin.cli:${namespace}`,
    source: `${config.api.url}/admin?cli=true` // TODO BRN: Attach mac/ip identifiers
  })
  const isTestApp = isTestAppConfigured(config)

  // HACK BRN: This testAuth value should really be placed into the auth
  // emulator so that we can change this dynamically without having to specify
  // it before hand
  let testAuth
  if (isTestApp) {
    testAuth = {
      serviceAccountId: adminContext.serviceAccount.id,
      uid: adminContext.serviceAccount.id
    }
  }

  const context = await createBaseContext({
    config,
    namespace: `cli:${namespace}`,
    serviceAccount: adminContext.serviceAccount,
    source: `${config.api.url}/service_account/${adminContext.serviceAccount.id}?cli=true`,
    storage: adminContext.storage,
    testAuth
  })
  const { logger } = context
  logger.debug('signing in with custom token')
  await signInWithIdToken(context, adminContext.token)

  return {
    adminContext,
    context
  }
}

export default setupCliContexts
