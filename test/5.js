const expect = require('chai').expect;
let solution = require('../solutions/5').solution;
// solution = require('../yourSolution').solution;

describe('sort arrays', () => {
  it('array should have names in ascending order', () => {
    const actual = ["manik", "daniel", "james", "vic", "lucas", "jose"];
    const expected = ["daniel", "james", "jose", "lucas", "manik", "vic"];
    expect(solution(actual)).eql(expected);
  });
  it('array should have numbers in ascending order', () => {
    const actual = [1, 5, 31, 57, 2, 0];
    const expected = [0,1,2,5,31,57];
    expect(solution(actual)).eql(expected);
  });
  it('array should have numbers in ascending order', () => {
    const actual = [57, 2];
    const expected = [2, 57];
    expect(solution(actual)).eql(expected);
  });

  it('array should have numbers in ascending order', () => {
    const actual = [57];
    const expected = [57];
    expect(solution(actual)).eql(expected);
  });
});
