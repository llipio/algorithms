// Tri Le
// Find sum of prime numbers

const isPrime = (number) => {
  for (let i = 2; i < number; i++) {
    if (number%i === 0) {
      return false;
    }
  }
  return number < 2 ? false : true;
};

const solution = (arr) => {
  let sumOfPrimeNumbers = 0;
  arr.forEach((e) => {
    if (isPrime(e)) {
      sumOfPrimeNumbers = sumOfPrimeNumbers + e;
    }
  });
  return sumOfPrimeNumbers;
};

module.exports = {
  solution,
};
