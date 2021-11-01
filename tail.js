const assertEqual = require('./assertEqual');

const tail = function(array) {
  if (array) {
    return array.filter((elem) =>{
      return elem !== array[0];
    });
  } else {
    return undefined;
  }
};

module.exports = tail;




