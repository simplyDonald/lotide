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

const words = ["ground", "control", "to", "major", "tom"];
const map = function(array, callback) {
  const results = [];
  for (let item of array) {
    results.push(callback(item));
  }
  return results;
}



// const results1 = map(words, word => word[0]);
// console.log(results1);

assertArraysEqual(map(words,word => word + 's'),["grounds", "controls", "tos", "majors", "toms"]);
assertArraysEqual(map(words,word => word.length),[6, 7, 2, 5, 3]);
assertArraysEqual(map(words,word => word.toUpperCase() ),["GROUND", "CONTROL", "TO", "MAJOR", "TOM"]);