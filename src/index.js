const getOS = require('./device/getOS')
const getExplore = require('./device/getExplore')

const setCookie = require('./cookie/setCookie')
const getCookie = require('./cookie/getCookie')
const removeCookie = require('./cookie/removeCookie')

const formatPassTime = require('./date/formatPassTime')
const formatRemainTime = require('./date/formatRemainTime')
const isSameDay = require('./date/isSameDay')

const addClass = require('./dom/addClass')
const hasClass = require('./dom/hasClass')
const removeClass = require('./dom/removeClass')
const getScrollTop = require('./dom/getScrollTop')
const offset = require('./dom/offset')
const scrollTo = require('./dom/scrollTo')
const setScrollTop = require('./dom/setScrollTop')
const windowResize = require('./dom/windowResize')

const deepClone = require('./object/deepClone')
const isEmptyObject = require('./object/isEmptyObject')

const isEmail = require('./regexp/isEmail')
const isIdCard = require('./regexp/isIdCard')
const isPhoneNum = require('./regexp/isPhoneNum')
const isUrl = require('./regexp/isUrl')

const parseQueryString = require('./url/parseQueryString')
const stringfyQueryString = require('./url/stringfyQueryString')

module.exports = {
  getOS,
  getExplore,

  setCookie,
  getCookie,
  removeCookie,

  formatPassTime,
  formatRemainTime,
  isSameDay,

  addClass,
  hasClass,
  removeClass,
  getScrollTop,
  offset,
  scrollTo,
  setScrollTop,
  windowResize,

  deepClone,
  isEmptyObject,

  isEmail,
  isIdCard,
  isPhoneNum,
  isUrl,

  parseQueryString,
  stringfyQueryString
}