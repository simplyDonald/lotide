const eqArrays = require('./eqArrays');
const assertEqual = require('./assertEqual');
// console.log(eqArrays([1,22,3],[1,22,65]));
const assertArraysEqual = function(array1, array2){
  // console.log(assertEqual(eqArrays(array1, array2),true));
  return assertEqual(eqArrays(array1,array2),true);
}

module.exports = assertArraysEqual;

