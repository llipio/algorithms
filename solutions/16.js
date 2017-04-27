//msach22
// should return true if the input array has duplicate values and false if it doesn't

const hasDuplicates = (array) => {
  let map = {};
  for (let i = 0; i < array.length; i++) {
    if (map[array[i]]) {
      return true;
    }
    map[array[i]] = true;
  };
  return false;
}

module.exports = {
  hasDuplicates
};
