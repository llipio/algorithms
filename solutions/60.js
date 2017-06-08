// Sum of its factors
// Given a number, return the sum of all of its factors.
// input: 2
// output: 3

// Solution by Colin Xie @ColinX13

/*
* @param {number} x - A number input
* @returns {number} sum - The sum of all the factors of the number
*/
const solution = (x) => {
  let sum = 0;
  for (let i = x; i >= 1; i--) {
    if (x % i === 0) {
      sum = sum + i;
    }
  }
  return sum;
};

module.exports = {
  solution,
};

