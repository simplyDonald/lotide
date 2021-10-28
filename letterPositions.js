const eqArrays = function(array1, array2) {
  if (array1.length !== array2.length) {
    return false;
  }
  for (let i = 0; i < array1.length; i++) {
    if (array1[i] !== array2[i]) {
      return false;
    } 
  }
  return true;

};
// console.log(eqArrays([1,22,3],[1,22,65]));
const assertArraysEqual = function(array1, array2){
  console.log(eqArrays(array1, array2));
}


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
  console.log(results);
  return results;
};
const result = letterPositions('hello') //holds the arrray that contains the index and indexCount of lettter 'e' in the object returnned from the function;
assertArraysEqual(result['h'],[0,1]); //compares the two passed in for equality using its inbuilt looping system.