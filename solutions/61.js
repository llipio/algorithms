// Takes in two numbers and returns their greatest common denominator (GCD)

// Input: 16,24
// Output: 8

// Solutions by Colin Xie @ColinX13

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
module.exports = {
  solution
};
