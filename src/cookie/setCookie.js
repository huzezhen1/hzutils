/**
 * @desc  设置Cookie
 * @param {String} name：  名称
 * @param {String} value： 值
 * @param {Date}   days：  有效期(天数)
 * @param {String} path：  目录
 * @param {String} domain：域
 * @param {String} secure：安全标志
 */
function setCookie(name, value, days, path, domain, secure) {
  var text = encodeURIComponent(name) + '=' + encodeURIComponent(value);

  if (days) {
    var date = new Date();
    date.setDate(date.getDate() + days);
    text += ';expires=' + date.toGMTString();
  }
  if (path) {
    text += ';path=' + path;
  }
  if (domain) {
    text += ';domain=' + domain;
  }
  if (secure) {
    text += ';secure';
  }

  document.cookie = text;
}

module.exports = setCookie