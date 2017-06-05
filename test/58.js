const expect = require('chai').expect;
const solution = require('../solutions/58.js').solution;
// solution = require('../yourSolution').solution;

describe('return smallest number of coins required to return the change', () => {
  class Employee {
    constructor(funVal, staffArray=[]) {
      this.funVal = funVal;
      this.staff = [];
      this.addStaff(staffArray);
    }

    addStaff(staffArray) {
      staffArray.forEach((staff) => {
        this.staff.push(staff);
      });
    }
  }

  let emp1 = new Employee(1);
  let emp2 = new Employee(5);
  let emp3 = new Employee(11);
  let emp4 = new Employee(10,[emp1]);
  let emp5 = new Employee(2,[emp2,emp3]);
  let emp6 = new Employee(4,[emp4,emp5]);

  it('simplest case of one Employee object', () => {
    expect(solution(emp1)).to.deep.equal([emp1]);
  });
  it('simple case of one Employee with Staff, where Employee has greater fun value', () => {
    expect(solution(emp4)).to.deep.equal([emp4]);
  });
  it('simple case of one Employee with Staff, where staff have greater fun value', () => {
    expect(solution(emp5)).to.deep.equal([emp2,emp3]);
  });
  it('hard case of one Employee with many staff', () => {
    expect(solution(emp6)).to.deep.equal([emp4,emp2,emp3]);
  });
});
