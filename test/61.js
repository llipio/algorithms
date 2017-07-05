const expect = require('chai').expect;
let solution = require('../solutions/61').solution;
let solution1 = require('../solutions/61').solution1;
// solution = require('../yourSolution').solution;

describe('greatest common denominator', () => {
  it('the gcd for 16 and 24 is 8', () => {
    expect(solution(16, 24)).eql(8);
  });
  it('the gcd for 5 and 6 is 1', () => {
    expect(solution(5, 6)).eql(1);
  });
  it('the gcd for 50 and 60 is 10', () => {
    expect(solution(50, 60)).eql(10);
  });
  it('the gcd for 40 and 20 is 20', () => {
    expect(solution1(40,20)).eql(20);
  });
  it('the gcd for 20 and 40 is 20', () => {
    expect(solution1(20,40)).eql(20);
  });
  it('the gcd for 1 and 4 is 1', () => {
    expect(solution1(1,4)).eql(1);
  });
});
