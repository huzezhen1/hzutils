const webpack = require('webpack')
const path = require('path')

const pkg = require('../package.json')
const rootPath = path.resolve(__dirname, '../')


const config = {
  entry: path.resolve(rootPath, 'src', 'index.js'),
  output: {
    filename: `${pkg.name}.min.js`,
    path: path.resolve(rootPath, 'min'),
    library: `${pkg.name}`,     // library指定的是你require时候的模块名
    libraryTarget: 'umd'        // library 的导出格式
  },
  module: {
    rules: [{
      test: /\.js$/,
      use: 'babel-loader'
    }]
  },
  plugins: [
    new webpack.optimize.UglifyJsPlugin()
  ]
}

module.exports = config