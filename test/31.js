const expect = require('chai').expect;
let solution = require('../solutions/31').solution;
// solution = require('./yourSolution').solution;

describe('longest string in an array', () => {
  it('the longest string in [hi,hello,hola] is hello', () => {
    expect(solution(['hi','hello','hola'])).eql('hello');
  })
  it('the longest string in [is, whether, approximately] is approximately', () => {
    expect(solution(['is','whether','approximately'])).eql('approximately');
  })
  it('the longest string in [wait,see,us] is wait', () => {
    expect(solution(['wait','see','us'])).eql('wait');
  })
  it('the longest string in [shout,basic,lead] is shout', () => {
    expect(solution(['shout','basic','lead'])).eql('shout');
  })
  it('the longest string in [just] is just', () => {
    expect(solution(['just'])).eql('just');
  })
});
