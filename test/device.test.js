import * as hzutils from '../src/index'

describe('Device API:', () => {
  describe('#getOS()', () => {
    it('hzutils.getOS() should return "windows"', () => {
      assert(hzutils.getOS() === 'windows' || hzutils.getOS() === 'MacOSX' || hzutils.getOS() === 'linux')
    })
  })

  describe('#getExplore()', function() {
    it('hzutils.getExplore() should return "Chrome" or "Firefox"', function() {
      console.log(`Explore:${hzutils.getExplore()}`)
      assert(/^Chrome|Firefox:/.test(hzutils.getExplore()))
    });
  });
})