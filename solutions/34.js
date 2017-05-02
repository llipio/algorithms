// Manik Sachdeva: msach22
// Number of repeating elements

const solution = (array, number) => {
  const arrLength = array.length;
  let counter = 0;
  for (let i = 0; i <= arrLength - 1; i++) {
    if (array[i] === number) {
      counter += 1;
    }
  };
  return counter;
};

module.exports = {
  solution
};
