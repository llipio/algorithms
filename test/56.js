const expect = require('chai').expect;
const solution = require('../solutions/56.js').solution;
// solution = require('../yourSolution').solution;

describe('return smallest number of coins required to return the change', () => {
  it('simplest case [1],total=1', () => {
    expect(solution([1,2],2)).to.equal(1);
  });
  it('simple case [1,2],total=2', () => {
    expect(solution([1,2],2)).to.equal(1);
  });
  it('simple case [1,2], total=4', () => {
    expect(solution([1,2],4)).to.equal(2);
  });
  it('hard case [2,3,6,7], total=12', () => {
    expect(solution([2,3,6,7],12)).to.equal(2);
  });
});

