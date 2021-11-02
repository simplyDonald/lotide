const assert = require('chai').assert;
const countOnly = require('../countOnly');
// allItems: an array of strings that we need to look through
// itemsToCount: an object specifying what to count
const firstNames = [
  "Karl",
  "Salima",
  "Agouhanna",
  "Fang",
  "Kavith",
  "Jason",
  "Salima",
  "Fang",
  "Joe"
];

const result1 = countOnly(firstNames, { "Jason": true, "Karima": true, "Fang": true, "Agouhanna": false });


describe('countOnly function check',() => {
  it('should return the number 1', () =>{
    assert.strictEqual(result1["Jason"], 1);
  })
  
  it('should return the value of undefined', () =>{
    assert.strictEqual(result1["Karima"], undefined);
  })
  
  it('should return the number 2', () =>{
    assert.strictEqual(result1["Fang"], 2);
  })
  
  it('should return the value of undefined', () =>{
    assert.strictEqual(result1["Agouhanna"], undefined);
  })

})
