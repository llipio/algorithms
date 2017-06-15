// Manik Sachdeva: msach22
// create a function that returns in reverse

const solution = (string) => {
  let newString = '';
  for (let i = string.length - 1; i >= 0; i--) {
    newString += string[i];
  };
  return newString;
};

// Maricris Bonzo: seemcat

const solution1 = (string) => {
  let indexLength = string.length - 1;
  let reverseString = '';

  for(i = 0; i <= indexLength; i++){
    reverseString = string[i] + reverseString;
  }
  return reverseString;
};

module.exports = {
  solution,
  solution1
};
