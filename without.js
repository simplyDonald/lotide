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

const assertArraysEqual = function(array1, array2){
  console.log(eqArrays(array1, array2));
}

const without = function(source, itemsToRemove){
  const newArray = [];
  for (let i = 0; i < source.length; i++) {
    for(let j = 0; j < itemsToRemove.length; j++){
      if (source[i] != itemsToRemove[j]) {
        newArray.push(source[i]);
      } 
    }
    
  }
  return newArray;
}
assertArraysEqual(without([1,2,3,4],["4"]),[1,2,3]); //true because we acccounted for type coercion in the for loop
assertArraysEqual(without([1,2,3,4],[2]),[1,3,4]); //true
assertArraysEqual(without([1,2,3,4],[3]),[1,2,3]);//false


const words = ["hello", "world", "lighthouse"];
without(words, ["lighthouse"]); // no need to capture return value for this test case
// Make sure the original array was not altered by the without function
assertArraysEqual(words, ["hello", "world", "lighthouse"]);





