// flatten the array
//
const solution = (arr) => {
  if (arr.length === 0) {
    return arr;
  }
  let elem = arr.shift();
  if (elem.length) {
    elem.forEach((elem) => {
      arr.push(elem);
    });
    solution(arr);
  } else {
    solution(arr).push(elem);
  }
  return arr;
};

module.exports = {
  solution: solution,
};
