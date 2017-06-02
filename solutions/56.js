// coin denomination problem
// Find minimum number of coins required to make up a given value
// Input: [5,10,25], 100
// Output: 4

// Solution by Yoo Jin

/**
 * Returns the minimum number of coins required to make up the given total value
 * Each coin denomination can be used as many times as needed.
 * @param {number[]} arr - An array of coin denomination numbers
 * @param {number} total - The total value 
 * @returns {number} min - The mininum number of coins which add up to the toal value
 */

const solution = (arr, total) => {
  if (total === 0) {
    return 0;
  }

  // set minimum number of coins to the total divided by smallest denomination
  let min = Math.floor(total / Math.min(...arr));
  arr.forEach((denom) => {
    if (total - denom >= 0) {
      min = Math.min(1 + solution(arr, total - denom), min);
    }  
  });
  return min;
};

module.exports = {
    solution
};
