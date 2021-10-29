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

// Returns true if both objects have identical keys with identical values.
// Otherwise you get back a big fat false!
const eqObjects = function(object1, object2) {
  const keysObj1 = Object.keys(object1);//returns an array of the keys
  const keysObj2 = Object.keys(object2); //returns an array of the keys
  if(keysObj1.length === keysObj2.length){
    for(let key in object1){
      if(Array.isArray(object1[key]) && Array.isArray(object2[key])){
        if(!eqArrays(object1[key],object2[key])){
          return false;
        }
      } else if(object1[key] !== object2[key]){
        return false;
      }
    }
    return true;

  } 
  return false;
};


const ab = { a: "1", b: "2" };
const ba = { b: "2", a: "1" };
assertEqual(eqObjects(ab, ba),true); // => true

const abc = { a: "1", b: "2", c: "3" };
assertEqual(eqObjects(ab, abc),false); // => false


const cd = { c: "1", d: ["2", 3] };
const dc = { d: ["2", 3], c: "1" };
// console.log(eqObjects(cd,dc));
assertEqual(eqObjects(cd, dc),true); // => true

const cd2 = { c: "1", d: ["2", 3, 4] };
assertEqual(eqObjects(cd, cd2),false); // => false
