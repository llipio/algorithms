// Manik Sachdeva: msach22
// reverse word order in a sentence
// Input: "I am the king"
// Output: "king the am I"

/**
* @param {string} sentence - string
* @returns {string} newString - reversed string
*/

const reverseInput = (string) => {
  let newString = '';
  for (let i = string.length - 1; i >= 0; i--) {
     newString += string[i];
  };
  return newString;
}

/**
* @param {string} sentence - a sentence
* @returns {string} result - reveresed word order
*/

const solution = (sentence) => {
  if (sentence.length < 2) {
    return sentence;
  }
  let subString = '';
  let result = [];
  for (let j = sentence.length - 1; j >= -1; j--) {
    if (sentence[j] === ' ' || j === -1) {
      result.push(reverseInput(subString));
      subString = '';
    } else {
        subString += sentence[j];
    }
  }
return result.join(' ');
};

module.exports = {
  solution
};
