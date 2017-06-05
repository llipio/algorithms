const expect = require('chai').expect;
let solution = require('../solutions/8a').solution;

describe('reverse String', () => {
  it('should return a string in reverse', () => {
    const actual = "react";
    const expected = "tcaer";
    expect(solution(actual)).to.equal(expected);
  });
  it('should return a string in reverse', () => {
    const actual = "hello";
    const expected = "olleh";
    expect(solution(actual)).to.equal(expected);
  });
});
