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
  for (let factor = num1; factor >= 1; factor--) {
    if (num1 % factor === 0 && num2 % factor === 0) {
      return factor;
    }
  }
};

const solution1 = (num1, num2) => { 
  let num1Array = [];
  let num2Array = [];
  let i = 1;
  let j = 1;
  
  while (i <= num1) {
    if (num1%i === 0){
      num1Array.push(i);
      i++;
    } else {
      i++;
    }
  };
  
  while (j <= num2) {
    if (num2%j === 0){
      num2Array.push(j);
      j++;
    } else {
      j++;
    }
  };
  
  let k = 0;
  let commonNumbers = [];
 
  while (k < num2Array.length){
    if (num1Array.indexOf(num2Array[k]) === -1){
      k++;
    } else {
      commonNumbers.push(num2Array[k]);
      k++;
    };
  };
  
  let GCD = Math.max.apply(Math, commonNumbers);
  return GCD;
};

module.exports = {
  solution,
  solution1
};
