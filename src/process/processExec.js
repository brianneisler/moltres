import { exec } from 'child_process'

const processExec = async (command, options) =>
  new Promise((resolve, reject) => {
    exec(command, options, (error, stdout, stderr) => {
      if (error) {
        error.stdout = stdout
        error.stderr = stderr
        return reject(error)
      }
      return resolve({
        stderr,
        stdout
      })
    })
  })

export default processExec
