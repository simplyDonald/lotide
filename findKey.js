const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`⛔🚫⛔Assertion Failed: ${actual} !== ${expected}`);
  }
  
};

const findKey = function(object,func){
  // const firstKeyArray = [];
  // for(const key in object){
  //   firstKeyArray.push(key);
  // }
  // // console.log('firstKeyArray',firstKeyArray);
  // for(const key of firstKeyArray){
  //   if(func(object[key])){
  //     return key;
  //   }
  // }
  
  // return undefined;
  for(const key in object){
  if(func(object[key])){
    return key;
    }
  }

}

const result = findKey({
  "Blue Hill": { stars: 1 },
  "Akaleri":   { stars: 3 },
  "noma":      { stars: 2 },
  "elBulli":   { stars: 3 },
  "Ora":       { stars: 2 },
  "Akelarre":  { stars: 3 }
}, x => x.stars === 2) // => "noma"

console.log(result);

// object["Blue Hill"] = object