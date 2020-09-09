import { invariant, slice } from '../lang'

const generateProjectId = (config = {}) => {
  if (config.test) {
    invariant(config.test.runId, 'config.test.runId must be defined')
    if (config.test.integration) {
      invariant(
        config.firebase.projectId,
        'config.firebase.projectId must be defined when config.test.integration is defined'
      )
      return config.firebase.projectId
    }
    // NOTE BRN: The max length of a project id is 30 characters
    return slice(0, 30, `test-${config.test.runId}`)
  }

  // NOTE BRN: We couldn't do this because the emulator requires that the
  // projectId match the actual project in order to show data
  // if (config.stage === 'local') {
  //   return 'local'
  // }

  invariant(
    config.firebase.projectId,
    'config.firebase.projectId must be defined'
  )
  return config.firebase.projectId
}

export default generateProjectId
