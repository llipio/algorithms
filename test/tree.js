const expect = require('chai').expect;
const tree = require('../tree');
const Node = tree.node;

describe('tree', () => {
  it('should return sum of nodes', () => {
    const node = new Node(2);
    expect(node.value).to.equal(2);
  });
});

