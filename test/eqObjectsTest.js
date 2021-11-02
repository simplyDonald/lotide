const assert = require('chai').assert;
const eqObjects = require('../eqObjects');


describe('eqObject function test',() => {
  it('should return true', () => {
    
    const ab = { a: "1", b: "2" };
    const ba = { b: "2", a: "1" };
    assert.deepEqual(eqObjects(ab, ba),true); // => true
  })
  
  it('should return false', () => {
    
    const ab = { a: "1", b: "2" };
    const abc = { a: "1", b: "2", c: "3" };
    assert.deepEqual(eqObjects(ab, abc),false); // => false
  })

  it('should return true', () => {
    const cd = { c: "1", d: ["2", 3] };
    const dc = { d: ["2", 3], c: "1" };
    assert.deepEqual(eqObjects(cd, dc),true); // => true
  })

  it('should return false', () => {
    const cd = { c: "1", d: ["2", 3] };
    const cd2 = { c: "1", d: ["2", 3, 4] };
    assert.deepEqual(eqObjects(cd, cd2),false); // => false
  })
})





