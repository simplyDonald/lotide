// const assertArraysEqual = require('../assertArraysEqual');
const middle = require('../middle');
const assert = require('chai').assert;



describe('#middleTest', () => {
  it('should return the middle values in a new array', () => {
    
    assert.deepEqual(middle([1,2,3,4]),[2, 3]);
  
    
  })
})
