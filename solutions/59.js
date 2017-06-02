//Function that takes in a number, returns true if number is prime. False otherwise.
const solution = (x) => {
  if(x<2){
    return false;
  }
  for(i=x; i>=1; i--){
    if(x % i === 0 && i !== x && i !== 1){
      return false;
    };
    return true;
};
};
module.exports = {
  solution
};
