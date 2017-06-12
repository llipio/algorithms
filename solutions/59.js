// Takes in a number, returns true if the number is prime, false otherwise.
// input: 1
// output: false

// Solution by Colin Xie @ColinX13
/**
 * Returns true or false based on whether the number is prime or not prime
 * @param {number} num - a number that is being input
 * @return {boolean} isPrime - the number is prime
*/
const solution = (num) => {
  if (num < 2) {
    return false;
  }
  for (let factor = num - 1; factor >= 2; factor--) {
    if (num % factor === 0 ) {
      return false;
    }
  }
  return true;
};
module.exports = {
  solution,
};
