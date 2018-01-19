import * as hzutils from '../src/index'

describe('Device API:', () => {
  describe('#getOS1()', () => {
    it('hzutils.getOS1() should return "windows"', () => {
      assert(hzutils.getOS() === 'windows' || hzutils.getOS() === 'MacOSX' || hzutils.getOS() === 'linux')
    })
  })
  describe('#getOS2()', () => {
    it('hzutils.getOS2() should return "windows"', () => {
      assert(hzutils.getOS() === 'windows' || hzutils.getOS() === 'MacOSX' || hzutils.getOS() === 'linux')
    })
  })
  describe('#getOS3()', () => {
    it('hzutils.getOS3() should return "windows"', () => {
      assert(hzutils.getOS() === 'windows' || hzutils.getOS() === 'MacOSX' || hzutils.getOS() === 'linux')
    })
  })
})