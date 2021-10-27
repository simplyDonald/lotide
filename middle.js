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

const middle = function(array) {
  const midArray  = [];
  if(array.length === 1 || array.length === 2){
    return [];
  }
  if(array.length % 2 === 0){
    midArray.push(array[Math.floor((array.length - 1) / 2)])
    midArray.push(array[Math.floor(array.length/ 2)])

  }

  if(array.length % 2 === 1){
    midArray.push(array[Math.floor((array.length - 1)) / 2])
  }
  return midArray;
}

console.log(middle([1,2,3,4,5])) // => [2]
console.log(middle([1, 2, 3, 4])) // => [2]


