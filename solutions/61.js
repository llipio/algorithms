// Takes in two numbers and returns their greatest common denominator (GCD)

// Input: 16,24
// Output: 8

// Solution #0 by Colin Xie @ColinX13
// Solution #1 by Maricris Bonzo @seemcat
/**
 * Factor is determined when both remainders of num1 and num2 are 0 when factor is divided from them.
 * @param num1 - the first number input
 * @param num2 - the second number input
 * @return {number} factor - the greatest common factor for num1 and num2
*/
const solution = (num1, num2) => {
  for(let factor = num1; factor >= 1; factor--){ 
    if(num1 % factor === 0 && num2 % factor === 0){
      return factor;
    }
  }
};

const solution1 = (num1, num2) => {
  if (num1 > num2){
    let long = num1;
    let short = num2;
  } else {
    let long = num2;
    let short = num1;
  };
  
  let num1Array = [];
  let num2Array = [];
  let i = 1;
  let j = 1;
  
  while (i < long) {
    if (long%i === 0){
      num1Array.push(i);
      i++;
    } else {
      i++;
    }
  };

  while (j < short) {
    if (short%i === 0){
      num2Array.push(j);
      j++;
    } else {
      j++;
    }
  };

  let k, l = 0;
  let commonNumbers = [];
  for (k; k < num1Array.length; k++){
    for (l; l < num2Array.length; l++){
      if (num1Array[k] === num2Array[l]){
        commonNumbers.push(num1Array[k]);
      }
    }
  };

  let GCD = Math.max(commonNumbers);
  return GCD;
};

module.exports = {
  solution,
  solution1
};
