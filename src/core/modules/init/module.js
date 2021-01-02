import { copyPath, ensureDirectory, pathExists } from '../../../fs'
import { pathBasename, pathRelative, pathResolve } from '../../../path'
import { download } from '../../../request'
import { unzipAllTo } from '../../../zip'

import { Template } from './constants'

const mod = () => ({
  setupCliCommands: () => [
    {
      command: 'init',
      description: 'initialize a new project',
      exec: async (context, cmd) => {
        const { projectName } = cmd.opts()
        const { logger } = context
        logger.info(`initializing new project '${projectName}'`)
        const cacheDir = pathResolve(__dirname, '..', '.cache')
        const projectDir = pathResolve(process.cwd(), projectName)
        await Promise.all([
          ensureDirectory(cacheDir),
          ensureDirectory(projectDir)
        ])

        // TODO BRN: only download the latest tag and cache the download by tag name
        const cacheFile = pathResolve(cacheDir, 'moltres-template.zip')
        const cacheFileExists = await pathExists(cacheFile)
        if (!cacheFileExists) {
          await download(Template.RN_APP, cacheFile)
        }

        const unpackedProjectPath = pathResolve(
          cacheDir,
          'moltres-template-master'
        )
        const unpackedProjectPathExists = await pathExists(unpackedProjectPath)
        if (!unpackedProjectPathExists) {
          await unzipAllTo(cacheFile, cacheDir, true)
        }
        await copyPath(unpackedProjectPath, projectDir)
        // eslint-disable-next-line no-console
        logger.info(`project '${projectName}' has been initialized`)
      },
      options: [
        {
          description: 'The name of the new project',
          option: '-n, --projectName [projectName]',
          required: true
        }
      ],
      since: '0.1.0',
      srcFile:
        pathRelative(process.cwd(), __dirname) + '/' + pathBasename(__filename)
    }
  ]
})

export default mod
