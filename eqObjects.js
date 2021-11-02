const assertEqual = require('./assertEqual');

const eqArrays = require('./eqArrays');

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

module.exports = eqObjects;


