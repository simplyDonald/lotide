const joinList = function(arrays) {
  
  let freshWord = [];
  for (let word of arrays) {
    freshWord.push(word);
  }
  return freshWord.join(', ');
};

// const conceptList = ["gists", "types", "operators", "iteration", "problem solving"];
// const concepts = joinList(conceptList);
// console.log(concepts);

module.exports = joinList;


