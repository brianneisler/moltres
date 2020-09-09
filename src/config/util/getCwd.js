const getCwd = (options = {}) => {
  return options.cwd || process.cwd()
}

export default getCwd
