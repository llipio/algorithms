const expect = require('chai').expect;
let solution = require('../solutions/18').solution;
//solution = require('../yourSolution').solution;

describe('Find missing number in array', () => {
  it('should return 7 for [5,6,8,9]', () => {
    const result = solution([5,6,8,9]);
    expect(result).to.equal(7);
  });

  it('should return 94 for [89,90,91,92,93,95]', () => {
    const result = solution([89,90,91,92,93,95]);
    expect(result).to.equal(94);
  });

  it('should return null if there is no missing number', () => {
    const result = solution([1,2,3,4,5]);
    expect(result).to.equal(null);
  });

  it('should return -8 for [-10,-9,-7,-6,-5]', () => {
    const result = solution([-10,-9,-7,-6,-5]);
    expect(result).to.equal(-8);
  });
});
