const letterPositions = function(sentence) {
  const results = {};
  let indexCount = 0;
  for (const letter of sentence) {
    if (letter !== ' ') { 
      if (results[letter]) {
        results[letter][1] += 1;
      } else {
        results[letter] = [indexCount,1];
      }
    }
    indexCount += 1;
  }
  // console.log(results);
  return results;
};

module.exports = letterPositions;

