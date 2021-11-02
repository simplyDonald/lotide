const assert = require('chai').assert;
const letterPositions = require('../letterPositions');

describe('letterPositions function', () => {
  it('should the given array', () =>{
    const result = letterPositions('hello') //holds the arrray that contains the index and indexCount of lettter 'e' in the object returnned from the function;
    assert.deepEqual(result['h'],[0,1]); //compares the two passed in for equality using its inbuilt looping system.
  })
})
