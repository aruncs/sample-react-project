const path = require('path')
const env = process.env.NODE_ENV
module.exports = {
  entry: path.resolve(__dirname, '..', '/src/client/index.js'),
  output: {
    path: path.resolve(__dirname, '..', 'dist/client')
  },
  devtool: (env === 'production') ? '' : 'source-map'
}