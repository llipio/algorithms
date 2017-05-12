// Largest Sum in an Array
// Return the largest sum of 2 consecutive numbers given an array
// input: [1, 2, 9, 0, 10]
// output: 11

// Zach Nagatani

/**
 * Uses a greedy approach to track the largestSum so far, updating as necessary
 * @param {Number[]} arr - an array of numbers
 * @returns {Number} largestSum - the largestSum of two consecutive numbers in arr
 */
const solution = arr => {
    let largestSum = arr[0] + arr[1];

    for (let i = 1; i < arr.length; i++) {
        let currentSum = arr[i] + arr[i + 1];
        largestSum = currentSum > largestSum ? currentSum : largestSum;
    }

    return largestSum;
};

module.exports = {
    solution
};