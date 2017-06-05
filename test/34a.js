const expect = require('chai').expect;
let solution = require('../solutions/34a').solution;

describe('number of repeating elements', () => {
  it('should return 1 for ([1,2,2,3],3)', () => {
    const result = solution([1,2,2,3], 3);
    expect(result).to.equal(1);
  });
   it('should return 2 for ([1,2,2,3],2)', () => {
    const result = solution([1,2,2,3], 2);
    expect(result).to.equal(2);
  });
   it('should return 1 for ([1,2,2,3],1)', () => {
    const result = solution([1,2,2,3], 1);
    expect(result).to.equal(1);
  });
   it('should return 0 for ([1,2,2,3],4)', () => {
    const result = solution([1,2,2,3], 4);
    expect(result).to.equal(0);
  });
});
