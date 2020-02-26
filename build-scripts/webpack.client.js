const path = require('path')
const env = process.env.NODE_ENV
module.exports = {
  resolve: {
    extensions: ['.js', '.jsx', '.scss']
  },
  entry: path.resolve(__dirname, '..', 'src/client/index.js'),
  output: {
    path: path.resolve(__dirname, '..', 'dist/client/js'),
    filename: 'index.js'
  },
  devtool: (env === 'production') ? '' : 'source-map'
}