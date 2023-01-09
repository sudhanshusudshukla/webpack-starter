const { merge } = require('webpack-merge')
const commonConfig = require('./webpack.common.js')

module.exports = (envvars) => {
  const { env } = envvars
  const envconfig = require(`./webpack.${env}.js`)
  const config = merge(commonConfig, envconfig)
  return config
}
