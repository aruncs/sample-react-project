const path = require('path')

const env = process.env.NODE_ENV

module.export = {
  target: 'node',
  entry: path.resolve(__dirname, '..', 'src/server/index.js'),
  output: {
    path: path.resolve(__dirname, '..', 'dist/server'),
    filename: 'index.js'
  },
  resolve: {
    extensions: ['.js', '.jsx', '.scss']
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
      }
    ]
  },
  devtool: (env === 'production') ? '' : 'source-map'
}