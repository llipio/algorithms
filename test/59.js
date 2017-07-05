const expect = require('chai').expect;
let solution = require('../solutions/59').solution;
// solution = require('../yourSolution').solution;

describe('prime numbers', () => {
  it('1 should not be a prime number', () => {
    expect(solution(1)).eql(false);
  });
  it('13 is a prime number', () => {
    expect(solution(13)).eql(true);
  });
  it('-1 should not be a prime number', () => {
    expect(solution(-1)).eql(false);
  });
  it('0 should not be a prime number', () => {
    expect(solution(0)).eql(false);
  });
  it('15 should not be a prime number', () => {
    expect(solution(15)).eql(false);
  });
});

