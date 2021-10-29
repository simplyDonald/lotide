// FUNCTION IMPLEMENTATION
const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`⛔🚫⛔Assertion Failed: ${actual} !== ${expected}`);
  }
  
};

const countLetters = function(string){
  const results = {};
  for (const letter of string) {
    if (letter !== ' ') { 
      if (results[letter]) {
        results[letter] += 1;
      } else {
        results[letter] = 1;
      }
    }
  
  }
  return results;
}
const resultloop = countLetters('bubble gu m');
console.log(resultloop);

// We are using this method on assert loop to check for the expected number in the object, remember our assertEqual function
// compares variable types and not arrays or objects so a hack around this is to check for the number we're expecting inside the object.
assertEqual(resultloop['e'],1);