// Maricris Bonzo
// Takes in (array, number) and outputs the number of 
// times the number shows up in the array.

const solution = (array, num) => {
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
  solution
};
