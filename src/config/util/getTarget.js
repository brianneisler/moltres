const getTarget = (options = {}) => {
  return process.env.TARGET || options.target
}

export default getTarget
