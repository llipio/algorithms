const expect = require('chai').expect;
let solution = require('../solutions/17').solution;
//solution = require('../yourSolution').solution;

describe('square array', () => {
  it('should return true for [[1,2,3],[1,2,3],[1,2,3]]', () => {
    const result = solution([[1,2,3],[1,2,3],[1,2,3]]);
    expect(result).to.equal(true);
  });
  it('should return false for [[1,2,3],[1,2,3],[1,2,3,4]]', () => {
    const result = solution([[1,2,3],[1,2,3],[1,2,3,4]]);
    expect(result).to.equal(false);
  });
  it('should return false for [[1,2,3],[1,2,3],[1]]', () => {
    const result = solution([[1,2,3],[1,2,3],[1]]);
    expect(result).to.equal(false);
  });
  it('should return false for []', () => {
    const result = solution([]);
    expect(result).to.equal(false);
  });
});
