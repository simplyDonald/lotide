// const assertEqual  = require('../assertEqual');
const tail = require('../tail');
const assert =require('chai').assert;


const words = ["Yo Yo", "Lighthouse", "Labs"];
// tail(words); // no need to capture the return value since we are not checking it
// assertEqual(tail(words).length, 2); // original array should still have 3 elements!

describe('#tail function', () => {
  it('should return 2 to match the new length value', () => {
    assert.deepEqual(tail(words), ["Lighthouse", "Labs"]);
  })
})