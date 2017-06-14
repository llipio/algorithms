// Max Fun Problem
// Return an array of employees that creates the maximum fun
// Input: Employee object
// Output: [Employee objects]

// Solution by Yoo Jin

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

/**
 * Given an Employee, return an array of employees that creates the maximum fun.
 * There is one condition: An Employee cannot be on the guestlist if his direct manager is going to the party.
 * @param {Employee} emp - an Employee with fun value and a list of his staff
 * @returns {Employee []]} list - Array of employees that creates the maximum fun
 */
const solution = (emp) => {
  if(!emp) {
    return [];
  }

  if(emp.staff.length === 0) {
    return [emp];
  }

  let funStaffListWithoutEmp = [];
  let funValWithoutEmp = emp.staff.reduce((funVal, staff) => {
    let staffList = solution(staff);
    funStaffListWithoutEmp = funStaffListWithoutEmp.concat(staffList);
    return staffList.reduce((acc, emp) => (acc + emp.funVal), funVal);
  }, 0);

  let funValWithEmp = emp.funVal;
  let funStaffListWithEmp = [emp];
  emp.staff.forEach((staff) => {
    funValWithEmp = staff.staff.reduce((funVal, staff) => {
      let staffList = solution(staff);
      funStaffListWithEmp = funStaffListWithEmp.concat(staffList);
      return staffList.reduce((acc, emp) => (acc + emp.funVal), funVal);
    }, funValWithEmp);
  });

  return funValWithoutEmp > funValWithEmp ?
    funStaffListWithoutEmp : funStaffListWithEmp;
};

module.exports = {
  Employee,
  solution
};
