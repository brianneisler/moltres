const getStage = (options = {}) => {
  return options.stage || process.env.STAGE
}

export default getStage
