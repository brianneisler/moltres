const getTarget = (options = {}) => {
  if (!process.env.TARGET && !options.target) {
    throw new Error('TARGET environment variable is missing')
  }

  return process.env.TARGET || options.target
}

export default getTarget
