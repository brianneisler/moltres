const updateEnv = (env) => {
  process.env = {
    ...process.env,
    ...env,
  }
  return process.env
}

export default updateEnv
