// Is Substring?
// return true if the second input is a subString
// of the first input, and false otherwise.
// input: 'all your base are belong to us', 'ase ar'
// output: true

// Zach Nagatani
const solution = (fullString, subString) => {
    return fullString.includes(subString);
};

// Colin Xie
const solution1 = (fullString, subString) => {
  for(let i = 0; i < fullString.length; i++){
    let subFull = fullString.substring(i,i + subString.length);
    if(subFull  === subString){
      return true;
    }
  }
  return false;
};

module.exports = {
  solution,
  solution1,
};
