const numberCast = function(array) {
  let newargs = array.slice(2);
  // const newArray = [];
  const newWords = newargs.map((elem)=>{
    let newWord = '';
    for (let i = 0; i < elem.length; i++) {
      newWord += elem[i];
    }
    return newWord;
  })
  const latin = newWords.map((elem)=>{
    let latinWord = '';
    for (let i = 0; i < elem.length; i++) {
      latinWord += elem[i];
    }
    return latinWord;
  })
  return latin.join(' ');
};

console.log(numberCast(process.argv));