// Takes an array and returns the longest string

// input: ['hi','hello','hola']
// output 'hello'

// Solutions by Colin Xie @ColinX13

/**
 * @param {string[]} arr - the array of strings
 * @return {string} word - the longest word in the array
*/
const solution = (arr) => {
  let maxLength = 0;
  let word = 0;
  for(let i = 0; i < arr.length; i++){
    if(arr[i].length > maxLength){
      maxLength = arr[i].length;
      word = arr[i];
    }
  }
  return word;
};
module.exports = {
  solution
};
