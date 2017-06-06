const expect = require('chai').expect; 
let solution = require('../solutions/77').solution;

describe('Return the count of vowels and consonants', () =>{
  it('should return { vowel: 2, consonant: 4 } for "yellow"', () =>{
    const result = solution('yellow');
    expect(result).to.eql({vowel: 2, consonant: 4 });
  });
});
