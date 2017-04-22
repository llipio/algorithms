const expect = require('chai').expect;
const reverse = require('../solutions/8');
const reverseString = reverse.reverseString;

describe('reverse String', () => {
  it('should reverse a string in reverse', () => {
    const string = "react";
    const expected = "tcaer";
    expect(reverseString(string)).to.equal(expected);
  });
});
