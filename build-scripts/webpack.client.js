const path = require('path')
const webpack = require('webpack')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const ManifestPlugin = require('webpack-manifest-plugin')
const CopyWebpackPlugin = require('copy-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')

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
    path: path.resolve(__dirname, '..', 'dist/client'),
    filename: 'js/[name].[chunkhash].js'
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
    },{
      test: /\.(sa|sc|c)ss$/,
      use: [
        {
          loader: MiniCssExtractPlugin.loader,
          options: {
            publicPath: path.join(__dirname, '..', 'dist/client/css') // Change this to settings public path so that CDN can be configured
          }
        },
        'css-loader',
        'sass-loader'
      ]
    }]
  },
  plugins: [
    new webpack.DefinePlugin({
      __DEBUG__: true
    }),
    new CleanWebpackPlugin(),
    new CopyWebpackPlugin([
      {
        from: path.join(__dirname, '..', 'src/app/images'),
        to: path.join(__dirname, '..', 'dist/client/images')
      },{
        from: path.join(__dirname, '..', 'src/app/icons'),
        to: path.join(__dirname, '..', 'dist/client/icons')
      }
    ]),
    new ManifestPlugin({
      fileName: path.resolve(__dirname, '..', 'src/server/resources.json'),
      prettyPrint: true
    }),
    new MiniCssExtractPlugin({
      filename: 'css/[name]-[chunkhash].css',
      chunkFilename: 'css/[id]-[chunkhash].css',
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