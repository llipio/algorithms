// Find missing number in array
// Return the missing number in an input array of consecutively increasing numbers.
// input: [5,6,8,9]
// output: 7

// Zach Nagatani

/**
 * Finds and returns the missing number from an array of consecutively increasing numbers
 * @param {Number[]} arr - An array of consecutively increasing numbers
 * @returns {Number} missingNum - the number missing from the input array
 */
const solution = arr => {
    let missingNum = null,
        i = 0;

    while (!missingNum && i < arr.length - 1) {
        const current = arr[i],
              next = arr[i + 1];

        missingNum = next === current + 1 ? missingNum : next - 1;
        i++;
    }

    return missingNum;
};

module.exports = {
    solution
};