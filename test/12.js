const expect = require('chai').expect;
let solution = require('../solutions/12').solution,
    solution2 = require('../solutions/12').solution2;
//solution = require('../yourSolution').solution;

describe('array of random numbers', () => {
  it.only('should return an array with length n', () => {
    let result = solution(5).length;
    expect(result).to.equal(5);

    result = solution2(5).length;
    expect(result).to.equal(5);
  });

  it.only('should contain only unique values', () => {
    let arr = solution(20),
        result = new Set(arr).size === arr.length;
    expect(result).to.equal(true);

    arr = solution2(20),
    result = new Set(arr).size === arr.length;
    expect(result).to.equal(true);
  });
});
