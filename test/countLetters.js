const assert = require('chai').assert;
const countLetters = require('../countLetters');

describe('#countLetters',() => {
  it('should return the same object specified', () =>{
    assert.deepEqual(countLetters("week"),{w:1, e:2, k:1})
  })
})



