import * as hzutils from '../src/index'

describe('Device API:', () => {
  describe('#getOS()', () => {
    it('hzutils.getOS() should return "windows"', () => {
      assert(hzutils.getOS() === 'windows' || hzutils.getOS() === 'MacOSX' || hzutils.getOS() === 'linux')
    })
  })
})