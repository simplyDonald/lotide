const reverse = function(array) {
  let newargs = array.slice(2);
  // const newArray = [];
  const newWords = newargs.map((elem)=>{
    let newWord = '';
    for (let i = elem.length - 1; i >= 0; i--) {
      newWord += elem[i];
    }
    return newWord;
  })
  return newWords.join(' ')
};

console.log(reverse(process.argv));