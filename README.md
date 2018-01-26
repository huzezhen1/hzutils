# hzutils
[![npm](https://img.shields.io/npm/v/hzutils.svg)](https://www.npmjs.com/package/hzutils) 
[![Build Status](https://travis-ci.org/huzezhen1/hzutils.svg?branch=master)](https://travis-ci.org/huzezhen1/hzutils)
[![Coverage Status](https://coveralls.io/repos/github/huzezhen1/hzutils/badge.svg?branch=master)](https://coveralls.io/github/huzezhen1/hzutils?branch=master)
[![npm](https://img.shields.io/npm/l/express.svg)](https://www.npmjs.com/package/hzutils)

网上或者自己收集整理的前端业务代码，尽量是对第三方库的补充，比如`debounce()`、`throttle()`这种节流函数我们可以直接使用[loadsh](https://lodash.com/docs/4.17.4)库

## 安装使用

### 方式一

直接下载`min`文件夹中的[hzutils.min.js](https://github.com/huzezhen1/hzutils/blob/master/min/hzutils.min.js)，支持UMD通用模块规范

``` html
  <script src="hzutils.min.js"></script>
  <script>
      var OS = hzutils.getOS()
  </script>
```

### 方式二

使用npm安装

```bash
$ npm install --save-dev hzutils
```

完整引入

```javascript
var hzutils = require('hzutils')
var OS = hzutils.getOS()
```

但是一般我们只需要引入部分方法

```javascript
var getOS = require('hzutils/getOS')
var OS = getOS()
```

ES6写法（需babel编译）

```javascript
import getOS from 'hzutils/getOS'
// 或
import {getOS} from 'hzutils'
```