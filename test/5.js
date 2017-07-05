const expect = require('chai').expect;
let solution = require('../solutions/5').solution;
let solution2 = require('../solutions/5').solution2;
// solution = require('../yourSolution').solution;

describe('sort arrays', () => {
  // solution tests
  it('array should have names in ascending order', () => {
    const actual = ['manik', 'daniel', 'james', 'vic', 'lucas', 'jose'];
    const expected = ['daniel', 'james', 'jose', 'lucas', 'manik', 'vic'];
    expect(solution(actual)).eql(expected);
  });
  it('array should have numbers in ascending order', () => {
    const actual = [1, 5, 31, 57, 2, 0];
    const expected = [0, 1, 2, 5, 31, 57];
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
  // solution2 tests
  it('solution2 - array should have names in ascending order', () => {
    const actual = ['manik', 'daniel', 'james', 'vic', 'lucas', 'jose'];
    const expected = ['daniel', 'james', 'jose', 'lucas', 'manik', 'vic'];
    expect(solution2(actual)).eql(expected);
  });
  it('solution2 - array should have numbers in ascending order', () => {
    const actual = [1, 5, 31, 57, 2, 0];
    const expected = [0, 1, 2, 5, 31, 57];
    expect(solution2(actual)).eql(expected);
  });
  it('solution2 - array should have numbers in ascending order - easy', () => {
    const actual = [57, 2];
    const expected = [2, 57];
    expect(solution2(actual)).eql(expected);
  });

  it('solution2 - array should have numbers in ascending order - single',
    () => {
    const actual = [57];
    const expected = [57];
    expect(solution2(actual)).eql(expected);
  });
});
