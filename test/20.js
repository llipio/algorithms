const expect = require('chai').expect;
let solution = require('../solutions/20').solution;
//solution = require('../yourSolution').solution;

describe('largest sum in array', () => {
  it('should return 11 for [1,2,9,0,10]', () => {
    const result = solution([1,2,9,0,10]);
    expect(result).to.equal(11);
  });
  it('should return 46 for [13,14,32,3,17,6]', () => {
    const result = solution([13,14,32,3,17]);
    expect(result).to.equal(46);
  });
  it('should work with negative numbers [-1,-2,-9,-3,-10]', () => {
    const result = solution([-1,-2,-9,-3,-10]);
    expect(result).to.equal(-3);
  })
});
