const webpack = require('webpack')
const path = require('path')
const nodeExternals = require('webpack-node-externals')
const CopyWebpackPlugin = require('copy-webpack-plugin')
const env = process.env.NODE_ENV

module.exports = {
  target: 'node',
  mode: env,
  node: {
    __dirname: false
  },
  externals: [nodeExternals()],
  entry: path.resolve(__dirname, '..', 'src/server/index.js'),
  output: {
    path: path.resolve(__dirname, '..', 'dist/server/'),
    filename: 'index.js'
  },
  // resolve: {
  //   extensions: ['.js', '.jsx', '.scss']
  // },
  // module: {
  //   rules: [
  //     {
  //       test: /\.jsx|\.js$/,
  //       loader: 'babel-loader',
  //       exclude: /node_modules/,
  //       options: {
  //         babelrc: false,
  //         presets: [
  //           "@babel/preset-env",
  //           "preact"
  //         ]
  //       }
  //     }
  //   ]
  // },
  plugins: [
    new CopyWebpackPlugin([{
      from: path.join(__dirname, '..', 'src/server/views'),
      to: path.join(__dirname, '..', 'dist/server/views')
    }])
  ],
  devtool: (env === 'production') ? '' : 'source-map'
}