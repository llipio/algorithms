const expect = require('chai').expect;
const solution = require('../solutions/7').solution;
// solution = require('../yourSolution').solution;

describe('solution should return the number of longest increasing numbers in', () => {
  it('simple cases', () => {
    expect(solution([2])).to.equal(1);
    
    expect(solution([2,3])).to.equal(2);
    
    expect(solution([3,2])).to.equal(1);
  });

  it('an array where one number decreases', () => {
    expect(solution([11,12,13,14,2,3])).to.equal(4);
  });

  it('an array where multiple numbers decrease', () => {
    expect(solution([4,3,2,5])).to.equal(2);
  });

  it('an array where numbers increase and decrease many times', () => {
    expect(solution([1,3,2,0,5,6,7,8])).to.equal(6);

    expect(solution([1,2,3,2,3,5])).to.equal(4);

    expect(solution([1,2,10,9,3,5])).to.equal(4);

    expect(solution([4,7,5,4,20,10])).to.equal(3);

    expect(solution([1,3,5,2,4,7])).to.equal(4);
  });
});

