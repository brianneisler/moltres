const getTarget = (options = {}) => {
  return options.target || process.env.TARGET
}

export default getTarget
