// Takes an array and returns the longest string

// input: ['hi','hello','hola']
// output 'hello'

// Solution by Colin Xie @ColinX13
// Solution1 by Maricris Bonzo @Seemcat
/**
 * @param {string[]} arr - the array of strings
 * @return {string} word - the longest word in the array
 */
const solution = (arr) => {
  let maxLength = 0;
  let word = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i].length > maxLength) {
      maxLength = arr[i].length;
      word = arr[i];
    }
  }
  return word;
};

const solution1 = (arr) => {
  let big = arr[0];
  let i = 1;
  while(i < arr.length){
    if (big.length < arr[i].length){
      big = arr[i];
    }
    i++;
  };
  return big;
};

module.exports = {
  solution,
  solution1
};
