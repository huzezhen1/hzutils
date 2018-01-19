// Karma configuration
// Generated on Thu Jan 18 2018 15:18:59 GMT+0800 (中国标准时间)
var wepackConfig = require('./webpack.test.conf.js')

module.exports = function(config) {
  config.set({

    // base path that will be used to resolve all patterns (eg. files, exclude)
    basePath: '../',


    // frameworks to use
    // available frameworks: https://npmjs.org/browse/keyword/karma-adapter
    frameworks: ['mocha', 'power-assert'],


    // list of files / patterns to load in the browser
    files: [
      // 'min/*.min.js',
      'test/**/*.test.js'
    ],


    // list of files / patterns to exclude
    exclude: [],


    // preprocess matching files before serving them to the browser
    // available preprocessors: https://npmjs.org/browse/keyword/karma-preprocessor
    preprocessors: {
      // 'min/*.min.js': ['babel'],
      // 'test/**/*.test.js': ['babel']
      'test/**/*.test.js': ['webpack']
    },


    // test results reporter to use
    // possible values: 'dots', 'progress'
    // available reporters: https://npmjs.org/browse/keyword/karma-reporter
    reporters: ['mocha'],

    // reporter options
    // mochaReporter: {
    //   colors: {
    //     success: 'blue',
    //     info: 'bgGreen',
    //     warning: 'cyan',
    //     error: 'bgRed'
    //   },
    //   symbols: {
    //     success: '+',
    //     info: '#',
    //     warning: '!',
    //     error: 'x'
    //   }
    // },

    mochaReporter: {
      colors: {
        success: 'blue',
        info: 'bgGreen',
        warning: 'cyan',
        error: 'bgRed'
      }
    },

    webpack: wepackConfig,

    // web server port
    port: 9876,


    // enable / disable colors in the output (reporters and logs)
    colors: true,


    // level of logging
    // possible values: config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
    logLevel: config.LOG_INFO,


    // enable / disable watching file and executing tests whenever any file changes
    autoWatch: true,


    // start these browsers
    // available browser launchers: https://npmjs.org/browse/keyword/karma-launcher
    browsers: ['Chrome', 'Firefox'],


    // Continuous Integration mode
    // if true, Karma captures browsers, runs the tests and exits
    singleRun: true,

    // Concurrency level
    // how many browser should be started simultaneous
    concurrency: Infinity
  })
}