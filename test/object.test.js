import * as hzutils from '../src/index'

describe('Object API:', function() {
  describe('#deepClone()', function() {
    it('person deepEqual hzutils.deepClone(person) should return true', function() {
      let person = {
        name: "user",
        settings: {
          first: "1",
          second: [1, 2, 3, 4, 3]
        }
      }
      assert.deepEqual(person, hzutils.deepClone(person))
    });

    it('person === hzutils.deepClone(person) should return false', function() {
      let person = {
        name: "user",
        settings: {
          first: "1",
          second: [1, 2, 3, 4, 3]
        }
      }
      assert.notEqual(person, hzutils.deepClone(person))
    });
  });

  describe('#isEmptyObject()', function() {
    it('hzutils.isEmptyObject({}) should return true', function() {
      assert(hzutils.deepClone({}))
    });

    it('hzutils.isEmptyObject({ one: 1 }) should return false', function() {
      assert.notEqual(hzutils.isEmptyObject({
        one: 1
      }))
    });

    it('hzutils.isEmptyObject([]) should return false', function() {
      assert.notEqual(hzutils.isEmptyObject([]))
    });
  });
})