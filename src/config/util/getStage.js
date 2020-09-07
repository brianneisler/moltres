const getStage = (options = {}) => {
  if (!process.env.STAGE && !options.stage) {
    throw new Error('STAGE environment variable is missing')
  }

  return process.env.STAGE || options.stage
}

export default getStage
