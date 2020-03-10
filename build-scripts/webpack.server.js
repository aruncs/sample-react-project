const webpack = require('webpack')
const path = require('path')
const nodeExternals = require('webpack-node-externals')
const CopyWebpackPlugin = require('copy-webpack-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const WrapperWebpackPlugin = require('wrapper-webpack-plugin')

const env = process.env.NODE_ENV

module.exports = {
  target: 'node',
  mode: env,
  node: {
    __filename: false,
    __dirname: false
  },
  externals: [nodeExternals()],
  entry: path.resolve(__dirname, '..', 'src/server/index.js'),
  output: {
    path: path.resolve(__dirname, '..', 'dist/server/'),
    filename: 'index.js'
  },
  resolve: {
    extensions: ['.js', '.jsx', '.scss'],
    alias: {
      "react": "preact/compat",
      "react-dom": "preact/compat"
    }
  },
  module: {
    rules: [
      {
        test: /\.jsx|\.js$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
        options: {
          babelrc: false,
          presets: [
            "@babel/preset-env",
            "preact"
          ]
        }
      },{
        test: /\.(sa|sc|c)ss$/,
        loader: 'null-loader'
      }
    ]
  },
  plugins: [
    new webpack.DefinePlugin({
      __DEBUG__: true // use config to toggle this depending on the environment
    }),
    //new CleanWebpackPlugin(),

    new WrapperWebpackPlugin({
      test: /\.jsx|\.js$/,
      header: 'require("module-alias/register");',
      footer: ''
    }),
    new CopyWebpackPlugin([{
      from: path.join(__dirname, '..', 'src/server/views/'),
      to: path.join(__dirname, '..', 'dist/server/views/')
    }])
  ],
  devtool: (env === 'production') ? '' : 'source-map'
}