const path = require('path')
const webpack = require('webpack')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const ManifestPlugin = require('webpack-manifest-plugin')
const CopyWebpackPlugin = require('copy-webpack-plugin')

const env = process.env.NODE_ENV
module.exports = {
  resolve: {
    extensions: ['.js', '.jsx', '.scss'],
    alias: {
      "react": "preact/compat",
      "react-dom": "preact/compat"
    }
  },
  entry: path.resolve(__dirname, '..', 'src/client/index.jsx'),
  output: {
    path: path.resolve(__dirname, '..', 'dist/client/js'),
    filename: '[name].[chunkhash].js'
  },
  module: {
    rules: [{
      test: /\.js|\.jsx$/,
      loader: 'babel-loader',
      exclude: /node_modules/,
      options: {
        presets: [
          "@babel/preset-env",
          "preact"
        ]
      }
    }]
  },
  plugins: [
    new webpack.DefinePlugin({
      __DEBUG__: true
    }),
    new CleanWebpackPlugin(),
    new CopyWebpackPlugin([
      {
        from: path.join(__dirname, '..', 'src/client/images'),
        to: path.join(__dirname, '..', 'dist/client/images')
      },{
        from: path.join(__dirname, '..', 'src/client/icons'),
        to: path.join(__dirname, '..', 'dist/client/icons')
      }
    ]),
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