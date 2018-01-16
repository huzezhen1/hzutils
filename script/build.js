const path = require('path')
const ora = require('ora')
const rm = require('rimraf')
const copy = require('copy')
const fs = require('fs')
const chalk = require('chalk')
const webpack = require('webpack')

const config = require('./webpack.conf')
const pkg = require('../package.json')
const rootPath = path.resolve(__dirname, '../')

new Promise((resolve, reject) => {
  // 构建压缩文件
  let building = ora('building...') // 终端显示的转轮
  building.start()
  // 先删除旧的
  rm(path.resolve(rootPath, 'min', `${pkg.name}.min.js`), err => {
    if(err) throw (err)
    webpack(config, function(err, stats) {
      if (err) throw (err)
      building.stop()
      process.stdout.write(stats.toString({   // 在终端控制台打印
          colors: true,
          modules: false,
          children: false,
          chunks: false,
          chunkModules: false
      }) + '\n\n')
      resolve()
      console.log(chalk.cyan('  Build complete.\n'))  // 终端字符串样式，cyan指蓝绿色
    })
  })
}).then(() => {
  // 替换模块文件
  let copying = ora('copying...')
  copying.start()
  rm('*.js', err => {
    if(err) throw(err)
    let folderList = fs.readdirSync(path.resolve(rootPath, 'src'))
    folderList.forEach((item, index) => {
      copy(`src/${item}/*.js`, rootPath, function(err, files) {
        if(err) throw (err)
        if(index === folderList.length - 1) {
          console.log(chalk.cyan('  Copy complete.\n'))
          copying.stop()
        }
      })
    })
  })
}).catch((err) => {
  throw(err)
})