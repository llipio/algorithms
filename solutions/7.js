// create a function that returns the largest number of increasing integers in an array

const getMaxOfSmallerVals = (arr, finalResultsArray, startIndex) => {
  let max = 0;
  for (let i = startIndex; i > 0; i--) {
    if (arr[i-1] < arr[startIndex]) {
      if(finalResultsArray[i-1] > max) {
        max = finalResultsArray[i-1];
      }
    }
  };
  return max;
};

const solution = (arr) => {
  let finalResultsArray = [];
  for(let i=0; i < arr.length; i++) {
    let maxVal = getMaxOfSmallerVals(arr, finalResultsArray, i);
    finalResultsArray[i] = maxVal + 1;
  }
  return Math.max(...finalResultsArray);
};

module.exports = {
  solution
};
