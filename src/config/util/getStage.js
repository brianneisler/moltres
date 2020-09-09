const getStage = (options = {}) => {
  return process.env.STAGE || options.stage
}

export default getStage
