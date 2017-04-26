//msach22
// should return true if the input array has duplicant element values

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

array = [1,2,3];

module.exports = {
  hasDuplicates
};
