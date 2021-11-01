const assertEqual = require('../assertEqual');
const assert = require('chai').assert;


describe('#assertequal Function',() =>{
  it('should return true for the input values', () => {
    assert.strictEqual(assertEqual(1, 1), true);
  })
})


