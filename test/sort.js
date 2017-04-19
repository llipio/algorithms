const expect = require('chai').expect;
const sort = require('../sort');
const sortMerge = sort.sortMerge;

describe('sort strings', () => {
  it('array should have names in ascending order', () => {
    const stringActual = ["manik", "daniel", "james", "vic", "lucas", "jose"];
    const expected = ["daniel", "james", "jose", "lucas", "manik", "vic"];
    const actual = sortMerge(stringActual);
    expect(actual).eql(expected);
  });
});

describe('sort numbers', () => {
  it('array should have numbers in ascending order', () => {
    const numberActual = [1, 5, 31, 57, 2, 0];
    const expected = [0,1,2,5,31,57];
    const actual = sortMerge(numberActual);
    expect(actual).eql(expected);
  });
});

describe('sort numbers', () => {
  it('array should have numbers in ascending order', () => {
    const numberActual = [57, 2];
    const expected = [2, 57];
    const actual = sortMerge(numberActual);
    expect(actual).eql(expected);
  });
});

describe('sort numbers', () => {
  it('array should have numbers in ascending order', () => {
    const numberActual = [57];
    const expected = [57];
    const actual = sortMerge(numberActual);
    expect(actual).eql(expected);
  });
});
