
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



module.exports = middle;