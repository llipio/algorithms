// Manik Sachdeva
// create a function that returns in reverse

const reverseString = (string) => {
  let newString = '';
  for (let i = string.length - 1; i >= 0; i--) {
    newString += string[i];
  };
  return newString;
};

module.exports = {
  reverseString
};
