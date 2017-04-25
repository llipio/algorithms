const expect = require('chai').expect;
const reverse = require('../solutions/13').solution;

describe('reverse String', () => {
  it('should return true if input string is a palindrome', () => {
  	const result1 = reverse("racecar");
    expect(result1).to.equal(true);

    const result2 = reverse("abba");
    expect(result2).to.equal(true);

    const result3 = reverse("palindrome");
    expect(result3).to.equal(false);
  });
});
