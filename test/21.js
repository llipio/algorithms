let expect = require('chai').expect;
let solution = require('../solutions/21').solution;
// solution = require('../yourSolution').solution;

describe('Return 3 top largest values of an array in a descending order', () =>{
  it('should return 3 top largest values of an array', () =>{
    expect(solution([8,1,4,2,12,6,7,19,2,9])).to.eql([19, 12, 9]);
  });
});

describe('Return 3 top largest values of an array in a descending order', () =>{
  it('should return 3 top largest values of an array', () =>{
       expect(solution([-8,-3,-7,-1,-20,-2])).to.eql([-1,-2,-3]);
   });
}); 
