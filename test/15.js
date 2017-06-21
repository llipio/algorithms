const expect = require('chai').expect;
let solution = require('../solutions/15').solution;
let solution1 = require('../solutions/15').solution1;
// solution = require('../yourSolution').solution;

describe('is substring', () => {
  it('should return true if second input is a substring of first input', () => {
    let result = solution('all your base are belong to us', 'ase ar');
    expect(result).to.equal(true);
    result = solution1('all your base are belong to us', 'ase ar');
    expect(result).to.equal(true);
  });

  it('should return false is second input is NOT a substring of first input',
    () => {
    let result = solution('i love tacos more than you', 'carne asada');
    expect(result).to.equal(false);
    result = solution1('i love tacos more than you', 'carne asada');
    expect(result).to.equal(false);
  });
 
  it('should return true if second input is a substring of the first input', () => {
    let result = solution('ab cd ef g', 'ef');
    expect(result).to.equal(true);
    result = solution1('ab cd ef g', 'ef');
    expect(result).to.equal(true);
  });

  it('should return false if second input is NOT a substring of first input', () => {
    let result = solution('can', 'cn');
    expect(result).to.equal(false);
    result = solution1('can', 'cn');
    expect(result).to.equal(false);
  });
});
