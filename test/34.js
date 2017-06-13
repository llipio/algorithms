const expect = require('chai').expect;
const solution = require('../solutions/34.js').solution;
const solution1 = require('../solutions/34.js').solution1;
// solution = require('../yourSolution').solution;

describe('return number of repeating elements', () => {
  it('simple case', () => {
    expect(solution([2], 2)).to.equal(1);
  });
  it('hard case', () => {
    expect(solution([3, 2], 1)).to.equal(0);
  });
  it('harder case', () => {
    expect(solution([3, 2, 3, 2], 2)).to.equal(2);
  });
  it('hardest case', () => {
    expect(solution([5, 5, 3, 2, 3, 2, 5, 5], 5)).to.equal(4);
  });
  it('simple case', () => {
    expect(solution1([2],2)).to.equal(1);
  });
  it('hard case', () => {
    expect(solution1([3,2],1)).to.equal(0);
  });
  it('harder case', () => {
    expect(solution1([3,2,3,2],2)).to.equal(2);
  })
  it('hardest case', () => {
    expect(solution1([5,5,3,2,3,2,5,5],5)).to.equal(4);
  });

});

