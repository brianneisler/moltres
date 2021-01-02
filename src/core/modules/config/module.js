// import { getFrameworkConfigPath } from '../../../config'
// import { pathBasename, pathRelative } from '../../../path'
import { handleActions } from '../../../redux'

import * as selectors from './selectors'

const mod = () => ({
  reducer: handleActions({}, {}),
  selectors
  // setupCliCommands: () => [
  //   {
  //     command: 'config [command]',
  //     description: 'get, set or delete config'
  //   },

  //   {
  //     command: 'cofig delete <key>',
  //     description: 'delete a config value by key',
  //     exec: async (context, key, cmd) => {
  //       const { logger } = context

  //       // TODO BRN: check for config file.
  //       const frameworkConfigPath = getFrameworkConfigPath()
  //       const pathExists = await fileExists
  //       // If config file does not exist, then leave it uncreated and exit
  //       // If config file does exist, then lock config file and load the config and remove the key
  //       // If config is the same as it was before, then do not save file
  //       // If config is different, then write the file
  //       // Unlock file

  //       logger.info(
  //         `Preference ${key}: ${JSON.stringify(preference.value, null, 2)}`
  //       )
  //     },
  //     since: '0.6.0',
  //     srcFile:
  //       pathRelative(process.cwd(), __dirname) + '/' + pathBasename(__filename)
  //   },

  //   {
  //     command: 'user preferences get [key]',
  //     description: 'get a user preference value',
  //     exec: async (context, key, cmd) => {
  //       const { userId } = cmd.opts()
  //       const { logger } = context

  //       let user
  //       if (isId(userId)) {
  //         user = await getUserById(context, userId)
  //       } else if (isValidPhoneNumber(userId)) {
  //         user = await findExistingUserByPhoneNumber(context, userId)
  //       } else {
  //         throw expected({
  //           message: `Given userId must be either an id or a phone number`
  //         })
  //       }

  //       if (!user) {
  //         throw expected({
  //           message: `User with the id ${userId} does not exist`
  //         })
  //       }

  //       const userPreferences = await findUserPreferencesById(context, user.id)
  //       if (!userPreferences) {
  //         throw expected({
  //           message: `No UserPreferences exist for the User with id ${userId}`
  //         })
  //       }

  //       if (!key) {
  //         const preferences = await findAllPreferencesByUserPreferencesId(
  //           context,
  //           userPreferences.id
  //         )
  //         logger.info(
  //           `All Preferences for User ${userId}:]n ${JSON.stringify(
  //             preferences,
  //             null,
  //             2
  //           )}`
  //         )
  //       } else {
  //         const preference = await findPreferenceById(context, [
  //           userPreferences.id,
  //           key
  //         ])
  //         logger.info(
  //           `Preference ${key}: ${JSON.stringify(preference.value, null, 2)}`
  //         )
  //       }
  //     },
  //     options: [
  //       {
  //         description: "The user's id or phone number",
  //         option: '-u, --userId [userId]',
  //         required: true
  //       }
  //     ],
  //     since: '0.6.0',
  //     srcFile:
  //       path.relative(process.cwd(), __dirname) +
  //       '/' +
  //       path.basename(__filename)
  //   },

  //   {
  //     command: 'user preferences set <key> <value>',
  //     description: 'get a user preference value',
  //     exec: async (context, key, value, cmd) => {
  //       const { userId } = cmd.opts()
  //       const { logger } = context
  //       if (!key) {
  //         throw new expected({
  //           message: 'key argument must be specified'
  //         })
  //       }

  //       let user
  //       if (isId(userId)) {
  //         user = await getUserById(context, userId)
  //       } else if (isValidPhoneNumber(userId)) {
  //         user = await findExistingUserByPhoneNumber(context, userId)
  //       } else {
  //         throw expected({
  //           message: `Given userId must be either an id or a phone number`
  //         })
  //       }

  //       if (!user) {
  //         throw expected({
  //           message: `User with the id ${userId} does not exist`
  //         })
  //       }

  //       const userPreferences = await findOrCreateUserPreferences(context, {
  //         userId: user.id
  //       })
  //       await setPreference(context, [userPreferences.id, key], {
  //         key,
  //         userPreferencesId: userPreferences.id,
  //         value
  //       })

  //       logger.info(`Preference '${key}' set `)
  //     },
  //     options: [
  //       {
  //         description: "The user's id or phone number",
  //         option: '-u, --userId [userId]',
  //         required: true
  //       }
  //     ]
  //   }
  // ]
})

export default mod
