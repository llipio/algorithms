const expect = require('chai').expect;
let solution = require('../solutions/34').solution;
<<<<<<< HEAD
// solution = require('../yourSolution').solution;
=======
// solution = require('./yourSolution').solution;
>>>>>>> ad15424... solution and test for 34

describe('number of elements', () => {
  it('should the occurance of a number in the array', () => {
    const actual = [1,2,3,3];
    const number = 3;
    expect(solution(actual, number)).eql(2);
  });
  it('should return 0', () => {
    const actual = [1,2,3];
    const number = 0;
    expect(solution(actual, number)).eql(0);
  });
});
