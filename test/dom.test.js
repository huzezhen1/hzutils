import * as hzutils from '../src/index'

describe('Dom API:', () => {
  describe('#addClass()', () => {
    let $ele = null
    before(function() {
      let div = document.createElement('div')
      div.id = 'J_addClass'
      document.body.appendChild(div)
      $ele = document.querySelector('#J_addClass')
    })
    it('hzutils.addClass($ele, "test") should return true', function() {
      hzutils.addClass($ele, 'test')
      assert(hzutils.hasClass($ele, 'test'))
    });
    after(function() {
      document.body.removeChild($ele)
    })
  })

  describe('#hasClass()', () => {
    let $ele = null
    before(function() {
      let div = document.createElement('div')
      div.id = 'J_hasClass'
      document.body.appendChild(div)
      $ele = document.querySelector('#J_hasClass')
      hzutils.addClass($ele, 'test')
    })
    it('hzutils.hasClass($ele, "test") should return true', function() {
      assert(hzutils.hasClass($ele, 'test'))
    });
    after(function() {
      document.body.removeChild($ele)
    })
  })

  describe('#removeClass()', () => {
    let $ele = null
    before(function() {
      let div = document.createElement('div')
      div.id = 'J_removeClass'
      document.body.appendChild(div)
      $ele = document.querySelector('#J_removeClass')
      hzutils.addClass($ele, 'test')
    })
    it('hzutils.removeClass($ele, "test") should return false', function() {
      hzutils.removeClass($ele, 'test')
      assert.notEqual(hzutils.hasClass($ele, 'test'))
    });
    after(function() {
      document.body.removeChild($ele)
    })
  })

  describe('#getScrollTop()', function() {
    let $body = document.body,
      bodyHeight = getComputedStyle($body).getPropertyValue('height'),
      length = 20;
    before(function() {
      $body.style.height = '10000px'
      hzutils.setScrollTop(length)
    })
    it('hzutils.getScrollTop() should return true', function() {
      assert(hzutils.getScrollTop() === length)
    })
    after(function() {
      hzutils.setScrollTop(0)
      $body.style.height = bodyHeight
    })
  });

  describe('#setScrollTop()', function() {
    let $body = document.body,
      bodyHeight = getComputedStyle($body).getPropertyValue('height'),
      length = 20;
    before(function() {
      $body.style.height = '10000px'
      hzutils.setScrollTop(length)
    })
    it('hzutils.getScrollTop() should return true', function() {
      hzutils.setScrollTop(length)
      assert(hzutils.getScrollTop() === length)
    })
    after(function() {
      hzutils.setScrollTop(0)
      $body.style.height = bodyHeight
    })
  });

  describe('#offset()', function() {
    let $ele = null
    before(function() {
      let div = document.createElement('div')
      div.id = 'J_addClass'
      div.style.position = 'absolute'
      div.style.top = '200px'
      div.style.left = '300px'
      document.body.appendChild(div)
      $ele = document.querySelector('#J_addClass')
    })
    it('hzutils.offset() should return true', function() {
      let offset = hzutils.offset($ele)
      assert(offset.left === 300 && offset.top === 200)
    })
    after(function() {
      document.body.removeChild($ele)
    })
  });

  describe('#scrollTo()', function() {
    let $body = document.body,
      bodyHeight = getComputedStyle($body).getPropertyValue('height'),
      length = 20,
      y = 100,
      duration = 300;
    before(function() {
      $body.style.height = '10000px'
    })
    it('hzutils.scrollTo() should return true', function(done) {
      hzutils.scrollTo(y, duration)
      setTimeout(function() {
        assert(hzutils.getScrollTop() === y)
        done()
      }, duration + 200)
    })
    after(function() {
      hzutils.setScrollTop(0)
      $body.style.height = bodyHeight
    })
  });


  describe('#windowResize()', function() {
    let innerHeight = window.innerHeight
    it('hzutils.windowResize(downCb) should return true', function(done) {
      hzutils.windowResize(function() {
        // 键盘缩回回调
        assert(window.innerHeight == innerHeight)
        done()
      }, function() {})
      // 触发resize事件，模拟软键盘缩回
      window.dispatchEvent(new Event('resize'));
    })
  });

  describe('#windowResize()', function() {
    let innerHeight = window.innerHeight
    it('hzutils.windowResize(upCb) should return true', function(done) {
      hzutils.windowResize(function() {}, function() {
        // 键盘弹起回调
        assert(window.innerHeight === innerHeight - 200)
        done()
      })
      // 设置innerHeight，模拟软键盘弹起
      window.innerHeight = innerHeight - 200
      // 触发resize事件
      window.dispatchEvent(new Event('resize'));
    })
    after(function() {
      window.innerHeight = innerHeight
    })
  });

})