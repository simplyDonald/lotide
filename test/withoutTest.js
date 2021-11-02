const assert = require('chai').assert;
const without = require('../without');

describe('without function', () =>{
  it('should return true for the new array',  () =>{
    assert.deepEqual(without([1,2,3,4],["4"]),[1,2,3]); //true because we acccounted for type coercion in the for loop
  })

  it('should return a new array without the provided input',  () =>{
    assert.deepEqual(without([1,2,3,4],[2]),[1,3,4]); //true
  })

  it('should return the new aray element',  () =>{
    assert.deepEqual(without([1,2,3,4],[3]),[1,2,4]);//false
  })
})



// const words = ["hello", "world", "lighthouse"];
// without(words, ["lighthouse"]); // no need to capture return value for this test case
// // Make sure the original array was not altered by the without function
// assertArraysEqual(words, ["hello", "world", "lighthouse"]);
