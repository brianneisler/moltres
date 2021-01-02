// NOTE BRN: We use a custom env variable here instead of NODE_ENV because when
// this binary is loaded for development by another application they may have
// set their NODE_ENV to "development" but have installed this module for
// production usage
if (process.env.MOLTRES_CLI_TEST) {
  require('@babel/register')(require('./babel.config'))
  module.exports = require('./src/cli')
} else {
  const sourceMapSupport = require('source-map-support')
  sourceMapSupport.install()
  module.exports = require('./dist/cli')
}
