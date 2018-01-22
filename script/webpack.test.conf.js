const config = {
  module: {
    rules: [{
      test: /\.js$/,
      use: {
        loader: 'babel-loader',
        options: {
          presets: ['env'],
          plugins: ['istanbul']
        }
      }
    }]
  }
}

module.exports = config