const expect = require('chai').expect;
const solution = require('../solutions/56.js').solution;
const solution2 = require('../solutions/56.js').solution2;
// solution = require('../yourSolution').solution;

describe('return smallest number of coins required to return the change',
  () => {
  it('simplest case [1], total=1', () => {
    expect(solution([1], 1)).to.equal(1);
    expect(solution2([1], 1)).to.equal(1);
  });
  it('simplest case [1,2], total=0', () => {
    expect(solution([1, 2], 0)).to.equal(0);
    expect(solution2([1, 2], 0)).to.equal(0);
  });
  it('simple case [1,2], total=2', () => {
    expect(solution([1, 2], 2)).to.equal(1);
    expect(solution2([1, 2], 2)).to.equal(1);
  });
  it('simple case [1,2], total=4', () => {
    expect(solution([1, 2], 4)).to.equal(2);
    expect(solution2([1, 2], 4)).to.equal(2);
  });
  it('hard case [1,2,3,6,7], total=12', () => {
    expect(solution([1, 2, 3, 6, 7], 12)).to.equal(2);
    expect(solution2([1, 2, 3, 6, 7], 12)).to.equal(2);
  });
});

