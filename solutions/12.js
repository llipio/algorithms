// Array of Random Numbers
// Create a function that takes in an input n, and returns an array of n unique values.
// input: 5
// output: [24,28,1,2,19]

// Zach Nagatani

/**
 * This approach isn't "random", but it does return unique values every time
 * @return Returns an array of unique values whose length is equal to n.
 * @param {Number} n - an integer representing the length of the output array
 */
const solution = n => {
    let num = n,
        arr = [];

    while(num > 0) {
        arr.push(num);
        num--;
    }

    return arr;
};

/**
 * This approach is "random" and uses Array.includes to check for
 * uniqueness before pushing into the array.
 * @return Returns an array of unique values whose length is equal to n.
 * @param {Number} n - an integer representing the length of the output array
 */
const solution2 = n => {
    let num = n,
        arr = [];

    const generateRandomNum = () => {
        return Math.floor((Math.random() * 20) * (Math.random() * 100));
    };


    while (num > 0) {
        let randNum = generateRandomNum();

        while (arr.includes(randNum)) {
            randNum = generateRandomNum();
        }

        if (!arr.includes(randNum)) {
            arr.push(randNum);
        }

        num--;
    }

    return arr;
};

module.exports = {
    solution,
    solution2
};