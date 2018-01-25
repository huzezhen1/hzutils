import * as hzutils from '../src/index'

describe('Regexp API:', function() {

  describe('#isEmail()', function() {
    it('hzutils.isEmail("leiquanlive.com") should return false ', function() {
      assert.notEqual(hzutils.isEmail("leiquanlive.com"))
    });
    it('hzutils.isEmail("leiquan@live.com") should return true ', function() {
      assert(hzutils.isEmail("leiquan@live.com"))
    });
  });

  describe('#isIdCard()', function() {
    it('hzutils.isIdCard("622224188203234033") should return true ', function() {
      assert(hzutils.isIdCard("622224188203234033"))
    });
    it('hzutils.isIdCard("zas224188203234033") should return false', function() {
      assert(!hzutils.isIdCard("leiquan@live.com"))
    });
  });

  describe('#isPhoneNum()', function() {
    it('hzutils.isPhoneNum("18882324234") should return true ', function() {
      assert(hzutils.isPhoneNum("18882324234"))
    });
    it('hzutils.isPhoneNum("8618882324234") should return true ', function() {
      assert(hzutils.isPhoneNum("8618882324234"))
    });
    it('hzutils.isPhoneNum("5534553") should return false', function() {
      assert(!hzutils.isPhoneNum("5534553"))
    });
  });

  describe('#isUrl()', function() {
    it('hzutils.isUrl("https://www.baidu.com/s?wd=www.slane.cn&rsv_spt=1") should return true ', function() {
      assert(hzutils.isUrl("https://www.baidu.com/s?wd=www.slane.cn&rsv_spt=1"))
    });
    it('hzutils.isUrl("http://www.baidu.com/s?wd=www.slane.cn&rsv_spt=1") should return true ', function() {
      assert(hzutils.isUrl("http://www.baidu.com/s?wd=www.slane.cn&rsv_spt=1"))
    });
    it('hzutils.isUrl("www.baidu.com") should return true', function() {
      assert(hzutils.isUrl("www.baidu.com"))
    });
    it('hzutils.isUrl("baidu.com") should return true', function() {
      assert(hzutils.isUrl("baidu.com"))
    });
    it('hzutils.isUrl("http://baiducom") should return false', function() {
      assert(!hzutils.isUrl("http://baiducom"))
    });
  });

});