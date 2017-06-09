const expect = require('chai').expect;
let solution = require('../solutions/15').solution;
// solution = require('../yourSolution').solution;

describe('is substring', () => {
  it('should return true if second input is a substring of first input', () => {
    const result = solution('all your base are belong to us', 'ase ar');
    expect(result).to.equal(true);
  });

  it('should return false is second input is NOT a substring of first input',
    () => {
    const result = solution('i love tacos more than you', 'carne asada');
    expect(result).to.equal(false);
  });
});
