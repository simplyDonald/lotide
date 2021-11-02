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

module.exports = findKey;

// object["Blue Hill"] = object