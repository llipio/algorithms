// Maricris Bonzo
// Create a function that returns a string in reverse.

const solution = (string) => {
  let indexLength = string.length - 1;
  let reverseString = '';

  for(i = 0; i <= indexLength; i++){
    reverseString = string[i] + reverseString;
  }
  return reverseString;
};

module.exports = {
  solution
};
