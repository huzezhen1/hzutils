import * as hzutils from '../src/index'

describe('Url API:', function() {
  describe('#parseQueryString()', function() {
    it(`hzutils.parseQueryString('https://www.baidu.com/s?wd=%E7%99%BE%E5%BA%A6&rsv_spt=10') deepEqual '{
            wd: '百度',
            rsv_spt: '10'
        }' should return true`, function() {
      let url = 'https://www.baidu.com/s?wd=%E7%99%BE%E5%BA%A6&rsv_spt=10'
      assert.deepEqual(hzutils.parseQueryString(url), {
        wd: '百度',
        rsv_spt: '10'
      })
    });
    it(`hzutils.parseQueryString('www.baidu.com?a=123&b=%26') deepEqual '{
            a: '123',
            b: '&'
        }' should return true`, function() {
      let url = 'www.baidu.com?a=123&b=%26'
      assert.deepEqual(hzutils.parseQueryString(url), {
        a: '123',
        b: '&'
      })
    });
    it(`hzutils.parseQueryString('') deepEqual '{}' should return true`, function() {
      let url = ''
      assert.deepEqual(hzutils.parseQueryString(url), {})
    });
  });

  describe('#stringfyQueryString()', function() {
    it(`hzutils.stringfyQueryString({
            wd: '百度',
            rsv_spt: '10'
        }) === 'https://www.baidu.com/s?wd=%E7%99%BE%E5%BA%A6&rsv_spt=10'  should return true`, function() {
      let param = {
        wd: '百度',
        rsv_spt: '10'
      }
      assert(hzutils.stringfyQueryString(param) === 'wd=%E7%99%BE%E5%BA%A6&rsv_spt=10')
    });
  });
})