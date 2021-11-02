const assert = require('chai').assert;
const joinList = require('../joinlistcopy');

describe('joinList Function', () =>{
  it('should return the given string',() =>{
    const conceptList = ["gists", "types", "operators", "iteration", "problem solving"];
    assert.strictEqual(joinList(conceptList), "gists, types, operators, iteration, problem solving");

  })
})

// Test / Driver Code below...
