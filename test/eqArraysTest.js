const eqArrays = require('../eqArrays');
const assert = require('chai').assert;

describe('#eqArrays Function',() =>{
  it('should return false for the input values', () => {
    assert.strictEqual(eqArrays([1, 2, 3], [1, 2, 4]), false);
  })
})


