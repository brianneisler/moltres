import { loadConfig } from '../../../config'
import { pathBasename, pathRelative } from '../../../path'
import { processSpawn } from '../../../process'

const mod = () => ({
  setupCliCommands: () => [
    {
      command: 'run <script>',
      description: 'run a script',
      exec: async (context, cmd) => {
        let { stage } = cmd.opts()
        const { args } = cmd
        stage = stage || process.env.STAGE || 'local'
        const script = args[0]
        if (!script) {
          throw new Error('Must specify a path to a script as an argument')
        }
        const cwd = process.cwd()
        // NOTE BRN: This will inject process.env with new values
        await loadConfig({ cwd, stage, target: 'cli' })
        const spawn = processSpawn('bash', args, {
          cwd,
          env: {
            ...process.env,
            STAGE: stage,
            TARGET: 'cli'
          },
          stdio: 'inherit'
        })

        process.on('SIGINT', function () {
          spawn.kill('SIGINT')
        })

        return new Promise((resolve, reject) => {
          spawn.on('error', (error) => {
            reject(error)
          })

          spawn.on('close', (code) => {
            if (code !== 0) {
              return reject(`script exited with code ${code}`)
            }
            return resolve(code)
          })
        })
      },
      options: [
        {
          description: 'The stage to execute the script against',
          option: '-s, --stage [stage]'
        }
      ],
      since: '0.1.0',
      srcFile:
        pathRelative(process.cwd(), __dirname) + '/' + pathBasename(__filename)
    }
  ]
})

export default mod
