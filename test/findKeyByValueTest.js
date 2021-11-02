const assert = require('chai').assert;
const findKeyByValue = require('../findKeyByValue');

const bestTVShowsByGenre = { 
  sci_fi: "The Expanse",
  comedy: "Brooklyn Nine-Nine",
  drama:  "The Wire"
};

describe('findKeyByvalue',() =>{
  it('should return the string \'drama\'',() => {
    assert.strictEqual(findKeyByValue(bestTVShowsByGenre, "The Wire"), "drama");
  })

  it('should return the value undefined',() => {
    assert.strictEqual(findKeyByValue(bestTVShowsByGenre, "That '70s Show"), undefined);
  })
  try{
    it('should return the string \'drama\'',() => {
      assert.strictEqual(findKeyByValue(bestTVShowsByGenre, "Dracula"), undefined);
    })

  } catch(err){
    console.log(err);
  }

  it('should return the string \'drama\'',() => {
    assert.strictEqual(findKeyByValue(bestTVShowsByGenre, "The Expanse"), "sci_fi");
  })

  it('should return the string \'drama\'',() => {
    assert.strictEqual(findKeyByValue(bestTVShowsByGenre, " "), undefined);
  })
})

