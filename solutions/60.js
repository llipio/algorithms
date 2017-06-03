//Return the sum of all factors in x
//Intialize sum to equal 0
//Factor i of number have mod equal to 0
//Reassign sum to equal to sum plus i
//Run through for loop
//input [2,4,10,24]
//output [3,7,18,60]

// Solution by Colin Xie @ColinX13

const solution = (x) => {
  let sum = 0
  for(let i = x; i >= 1; i--){
    if(x % i === 0){
      sum = sum + i
    };
  };
  return sum
};
module.exports = {
  solution
};

