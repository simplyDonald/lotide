const joiner = function(words) {
  let freshWord = [];
  for (let word of words) {
    freshWord.push(word);
  }
  return freshWord;
};

const joinList = function(arrays) {
  return joiner(arrays).join(', ');
};

// Test / Driver Code below...
const conceptList = ["gists", "types", "operators", "iteration", "problem solving"];
const concepts = joinList(conceptList);
console.log(`Today I learned about ${concepts}.`);

