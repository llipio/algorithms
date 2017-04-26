const expect = require('chai').expect;
const duplicates = require('../solutions/16');
const hasDuplicates = duplicates.hasDuplicates;

describe('check duplicates', () => {
  it('should return true since array has duplicates', () => {
    const array = [1,2,3,3,4];
    const expected = true;
    expect(hasDuplicates(array)).eql(expected);
  });
  it('should return false because array does not have duplicates', () => {
    const array = [1,2,3,4];
    const expected = false;
    expect(hasDuplicates(array)).eql(expected);
  });
  it('should return false because array is empty', () => {
    const array = [];
    const expected = false;
    expect(hasDuplicates(array)).eql(expected);
  });
});
