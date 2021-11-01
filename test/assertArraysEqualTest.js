const assertArraysEqual = require('../assertArraysEqual');
const assert = require('chai').assert;



// assertArraysEqual([1,4],[1,4]);

describe('#assertArraysEqual function', () =>{
  it('should return true for the arrays given', () => {
    assert.strictEqual(assertArraysEqual([1,4],[1,4]), true);
  })
})