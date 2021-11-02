const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`⛔🚫⛔Assertion Failed: ${actual} !== ${expected}`);
  }
  
};

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
  return eqArrays(array1,array2);
}

const takeUntil = function(array, callback) {
  const inspect = require('util').inspect; // <= add this line
  const freshArray = [];
  for(item of array){
    if(callback(item) === false){
      freshArray.push(item);
    } else {
      break;
    }
    
  }

  return freshArray;
  
}
module.exports = takeUntil;


