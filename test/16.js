const expect = require('chai').expect;
const duplicates = require('../solutions/16');
const hasDuplicates = duplicates.hasDuplicates;

describe('check duplicates', () => {
  it('should return true since array has duplicates', () => {
    const array = [1,2,3,3,4];
    expect(hasDuplicates(array)).to.be.true;
  });
  it('should return false because array does not have duplicates', () => {
    const array = [1,2,3,4];
    expect(hasDuplicates(array)).to.be.false;
  });
  it('should return false because array is empty', () => {
    const array = [];
    expect(hasDuplicates(array)).to.be.false;
  });
});
