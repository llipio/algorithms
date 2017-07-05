const expect = require('chai').expect;
let solution = require('../solutions/19').solution;
// solution = require('../yourSolution').solution;

describe('Pairs sum to x', () => {
  it('should return pairs of number that sum to x', () => {
    const result = solution([1,2,3,4,5], 6);
    expect(result).eql([[1,5],[2,4]]);
 });
});
