//Daniel
//Number of repeating elements in an array

const solution = (arr, k) => {
  let total = 0;
  for (i=0; i < arr.length; i++) {
    if (arr[i] === k){
      total++;
    }
   }
   return total;
 };
 module.exports = {
   solution
};
