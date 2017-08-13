// flatten the array
//
const solution = (arr) => {
  if (arr.length === 0) {
    return arr;
  }
  let a = arr.shift();
  if (a.length) {
  a.forEach((elem) => {
    arr.push(elem);
  });
    solution(arr);
  } else {
    solution(arr).push(a);
  }
  return arr;
};

module.exports = {
  solution: solution,
};
