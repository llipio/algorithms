const expect = require('chai').expect;
let solution = require('../solutions/8').solution;
solution = require('../yourSolution').solution;

describe('reverse String', () => {
  it('should reverse a string in reverse', () => {
    const actual = 'react';
    const expected = 'tcaer';
    expect(solution(actual)).to.equal(expected);
  });
 it('should reverse a string in reverse', () => {
    const actual = "word";
    const expected = "drow";
    expect(solution(actual)).to.equal(expected);
  });
 it('should reverse a string in reverse', () => {
    const actual = "I";
    const expected = "I";
    expect(solution(actual)).to.equal(expected);
  });
 it('should reverse a string in reverse', () => {
    const actual = "welcome emoclew";
    const expected = "welcome emoclew";
    expect(solution(actual)).to.equal(expected);
  }); 
});
