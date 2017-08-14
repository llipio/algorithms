const expect = require('chai').expect;
let solution = require('../solutions/116.js').solution;

describe('flatten the array', () => {
  it('test 1 base', () => {
    const result = solution([]);
    expect(result).to.eql([]);
  });
  it('test 2 simple', () => {
    const result = solution([1]);
    expect(result).to.eql([1]);
  });
  it('test 3 hairy', () => {
    const result = solution([3, [5, 2, 6], 4]);
    expect(result).to.eql([6, 2, 5, 4, 3]);
  });
  it('test 4 complex', () => {
    const result = solution([10, 4, [2, [1, 3]], 6, 10]);
    expect(result).to.eql([3, 1, 2, 10, 6, 4, 10]);
  });
});
