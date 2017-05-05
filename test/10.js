const expect = require('chai').expect;
let solution = require('../solutions/10').solution;
//solution = require('../yourSolution').solution;

describe('sum of prime numbers', () => {
  it('should return sum as 12 for [1,2,3,9,8,7].', () => {
    const result = solution([1,2,3,9,8,7]);
    expect(result).to.equal(12);
  });
  it('should return sum as 0 for [1].', () => {
    const result = solution([1]);
    expect(result).to.equal(0);
  });
  it('should return sum as 2 for [-1.0.1.2.4.6.8.9].', () => {
    const result = solution([-1,0,1,2,4,6,8,9]);
    expect(result).to.equal(2);
  });
  it('should return sum as 0 for [].', () => {
    const result = solution([]);
    expect(result).to.equal(0);
  });
});
