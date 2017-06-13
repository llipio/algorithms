const expect = require('chai').expect;
let solution = require('../solutions/32').solution;

describe('Finding singleton in an array', () =>{
  it.only('should return singleton in an array', () =>{
    expect(solution([1,2,3,3,1,4])).to.eql([2, 4]);
  });
});
