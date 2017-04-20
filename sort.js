// Manik Sachdeva
// create a sorting function that allows you to sort numbers or text in accending order

const sortMerge = (array) => {
  if (array.length < 2) {
    return array;
  }
  const middle = parseInt(array.length / 2);
  const firstHalf = array.slice(0, middle);
  const secondHalf = array.slice(middle, array.length);
  return mergeTogether(sortMerge(firstHalf), sortMerge(secondHalf));
}

const mergeTogether = (firstHalf, secondHalf) => {
    let sortedResult = [];
    while (firstHalf.length && secondHalf.length) {
      if (firstHalf[0] <= secondHalf[0]) {
        sortedResult.push(firstHalf.shift());
      } else {
        sortedResult.push(secondHalf.shift());
      }
    }
  while (firstHalf.length) {
    sortedResult.push(firstHalf.shift());
  }
  while (secondHalf.length) {
    sortedResult.push(secondHalf.shift());
  }
  return sortedResult;
}

module.exports = {
  sortMerge
};
