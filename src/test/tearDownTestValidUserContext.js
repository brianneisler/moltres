import { deleteValidUser } from '../core/modules/auth'
import { getProperty } from '../lang'

const tearDownTestValidUserContext = async (testContext, userContext) => {
  try {
    if (userContext.currentUser) {
      await deleteValidUser(
        testContext,
        getProperty('id', userContext.currentUser)
      )
    }
  } catch (error) {
    testContext.logger.error(error)
  }
  await userContext.app.delete()
}

export default tearDownTestValidUserContext
