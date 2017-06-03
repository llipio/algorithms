const expect = require('chai').expect;
let solution = require('../solutions/60').solution;
// solution = require('./yourSolution').solution; 

describe('sum of factors', () => {
  it('sum of the factors of 2 is 3', () => {
    expect(solution(2)).eql(3);
  });
  it('sum of the factors of 4 is 7', () => {
    expect(solution(4)).eql(7);
  });
  it('sum of the factors of 10 is 18', () => {
    expect(solution(10)).eql(18);
  });
  it('sum of the factors of 24', () => {
    expect(solution(24)).eql(60);
  });
});

