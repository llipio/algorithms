// coin denomination problem

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
