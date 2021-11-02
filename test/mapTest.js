const assert = require('chai').assert;
const map = require('../map');

const words = ["ground", "control", "to", "major", "tom"];

describe('map function', () => {
  it('should return ', () => {
    assert.deepEqual(map(words,word => word + 's'),["grounds", "controls", "tos", "majors", "toms"]);
  })

  it('should return ', () => {
    assert.deepEqual(map(words,word => word.length),[6, 7, 2, 5, 3]);
  })

  it('should return ', () => {
    assert.deepEqual(map(words,word => word.toUpperCase() ),["GROUND", "CONTROL", "TO", "MAJOR", "TOM"]);
  })
})


