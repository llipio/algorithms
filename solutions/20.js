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
    // Initialize largestSum to the sum of the first two elements in arr
    let largestSum = arr[0] + arr[1];

    // Loop through arr, adding i + (i + 1) and compare to largestSum, updating as necessary
    for (let i = 1; i < arr.length; i++) {
        // Set the current sum of the iteration to the current element i and the next element, i + 1
        let currentSum = arr[i] + arr[i + 1];

        // If currentSum is larger than largestSum, update accordingly, else leave as is
        largestSum = currentSum > largestSum ? currentSum : largestSum;
    }

    return largestSum;
};

module.exports = {
    solution
};