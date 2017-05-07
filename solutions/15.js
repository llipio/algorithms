//Is Substring?
// return true if the second input is a substring of the first input, and false otherwise.
// input: 'all your base are belong to us', 'ase ar'
// output: true

const solution = (fullString, subString) => {
    return fullString.includes(subString);
};

module.exports = {
  solution
};
