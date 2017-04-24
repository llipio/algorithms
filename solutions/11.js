// vdewinter
// Create a function that returns only the values of an array that are repeated
// Input: [1,8,8,8,7,7,1,3]
// Output: [1,8,7]

const solution = (input) => {
	if (input == null) {
		return [];
	}
	const seen = {};
	const result = {};
	input.forEach((k) => {
		if (seen[k]) {
			result[k] = true;
		}
		seen[k] = true;
	})
	return Object.keys(result);
};

module.exports = {
  solution
};