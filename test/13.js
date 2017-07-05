const expect = require('chai').expect;
let solution = require('../solutions/13').solution;
let solution2 = require('../solutions/13').solution2;
// solution = require('../yourSolution').solution;

describe('reverse String', () => {
  it('should return true if input string is a palindrome', () => {
    expect(solution("racecar")).to.equal(true);
    expect(solution2("racecar")).to.equal(true);
  });
  it('should return true if input string is a palindrome', () => {
    expect(solution("palindrome")).to.equal(false);
    expect(solution2("palindrome")).to.equal(false);
   });
});
