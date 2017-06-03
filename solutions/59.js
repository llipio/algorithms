//Input a number x into the 'solution' function.
//Returns false if x<2.
//Returns false if x is divisible by number not 1 and x when x>2.
//Otherwise return true.
//input [1,13,-1,0,14]
//output [false,true,false,false,false]

// Solution by Colin Xie @ColinX13

const solution = (x) => {
  if(x<2){
    return false;
  }
  for(let i=x-1; i>=2; i--){
    if(x % i === 0 ){
      return false;
    }
  }
  return true;
};
module.exports = {
  solution
};
