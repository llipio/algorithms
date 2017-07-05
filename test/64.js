const expect = require('chai').expect;
let solution = require('../solutions/64').solution;
// solution = require('../yourSolution').solution;

describe('reverse word order in a sentence', () => {
  it('should reverse the word order', () => {
    expect(solution('I am the king')).eql('king the am I');
  });
  it('should return I', () => {
    expect(solution('I')).eql('I');
  });
});
