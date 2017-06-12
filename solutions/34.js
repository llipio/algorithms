// Daniel
// Number of repeating elements in an array
const solution = (arr, k) => {
  let total = 0;
  for (i=0; i < arr.length; i++) {
    if (arr[i] === k) {
      total++;
    }
   }
   return total;
};

// Maricris Bonzo
const solution1 = (array, num) => {
  let i = 0;
  let numOfTimes = 0;

  while (i < array.length){
    if (array[i] === num){
      numOfTimes = numOfTimes + 1;
      i++;
    } else {
      i++;
    }
  }
  return numOfTimes;
};

module.exports = {
  solution,
  solution1
 };

