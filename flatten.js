const flatten = function(array) {

  const newArray = [];
  for (let item of array) {
    if(Array.isArray(item)){
      for (item2 of item){
        newArray.push(item2)
      }
    } else {
      newArray.push(item);
    }
    
  }
  return newArray;
}

module.exports = flatten