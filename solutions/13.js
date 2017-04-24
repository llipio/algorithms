// vdewinter
// Return true if input string is a palindrome


const solution = (str) => {
	const strLen = str.length;
	const midpoint = strLen / 2;
	const firstHalf = str.substring(0, midpoint);
	const splitFrom = (strLen % 2 == 0) ? midpoint : midpoint + 1;
	const secondHalf = str.substring(splitFrom, strLen);
	return firstHalf == secondHalf.split("").reverse().join("");
};

module.exports = {
  solution
};