const path = require('path')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const ManifestPlugin = require('webpack-manifest-plugin')

const env = process.env.NODE_ENV
module.exports = {
  resolve: {
    extensions: ['.js', '.jsx', '.scss']
  },
  entry: path.resolve(__dirname, '..', 'src/client/index.js'),
  output: {
    path: path.resolve(__dirname, '..', 'dist/client/js'),
    filename: '[name].[chunkhash].js'
  },
  plugins: [
    new CleanWebpackPlugin(),
    new ManifestPlugin({
      fileName: path.resolve(__dirname, '..', 'src/server/resources.json'),
      prettyPrint: true
    })
  ],
  optimization: {
    splitChunks: {
      cacheGroups: {
        vendors: false,
        default: false,
        external: {
          chunks: 'all',
          name: 'external',
          test: /[\\/]node_modules[\\/]/
        }
      }
    }
  },
  devtool: (env === 'production') ? '' : 'source-map'
}