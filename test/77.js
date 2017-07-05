const expect = require('chai').expect; 
let solution = require('../solutions/77').solution;
// solution = require('../yourSolution').solution;

describe('Return the count of vowels and consonants', () =>{
  it('should return { vowel: 2, consonant: 4 } for "yellow"', () =>{
    expect(solution('yellow')).to.eql({vowel: 2, consonant: 4 });
  });
});
