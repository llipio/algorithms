// Max Fun Problem
// Return an array of employees that creates the maximum fun
// Input: Employee object
// Output: [Employee objects]

// Solution by Yoo Jin

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

  let funValWithoutEmp = 0;
  let funStaffListWithoutEmp = [];
  emp.staff.forEach((staff) => {
    solution(staff).forEach((emp) => {
      funValWithoutEmp += emp.funVal;
      funStaffListWithoutEmp.push(emp);
    });
  });

  let funValWithEmp = emp.funVal;
  let funStaffListWithEmp = [emp];
  emp.staff.forEach((staff) => {
    staff.staff.forEach((staffstaff) => {
      solution(staffstaff).forEach((emp) => {
        funValWithEmp += emp.funVal;
        funStaffListWithEmp.push(emp);
      });
    });
  });

  if (funValWithoutEmp > funValWithEmp) {
    return funStaffListWithoutEmp;
  }
  return funStaffListWithEmp;
};

module.exports = {
  solution
};
