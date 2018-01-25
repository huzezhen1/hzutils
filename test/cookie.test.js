import * as hzutils from '../src/index'

describe('Cookie API:', () => {
  describe('#getCookie()', () => {
    before(() => {
      hzutils.setCookie('test', 'getTestValue')
    })
    it('hzutils.getCookie("test") should return "getTestValue"', () => {
      assert(hzutils.getCookie('test') === 'getTestValue')
    })
    after(() => {
      hzutils.removeCookie('test')
    })
  })

  describe('#removeCookie()', () => {
    before(() => {
      hzutils.setCookie('test', 'removeTestValue')
    })
    it('hzutils.removeCookie("test") should return true', () => {
      hzutils.removeCookie('test')
      assert.notEqual(hzutils.getCookie('test'), 'removeTestValue')
    })
  })

  describe('#setCookie()', () => {
    it('hzutils.setCookie("test") should return true', () => {
      hzutils.setCookie('test', 'setTestValue')
      assert(hzutils.getCookie('test') === 'setTestValue')
    })
    after(() => {
      hzutils.removeCookie('test')
    })
  })
})