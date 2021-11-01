const eqArrays = require('./eqArrays');
const assertEqual = require('./assertEqual');
// console.log(eqArrays([1,22,3],[1,22,65]));
const assertArraysEqual = function(array1, array2){
  assertEqual(eqArrays(array1, array2),true);
  return eqArrays(array1,array2);
}


module.exports = assertArraysEqual;

