// Count the number of prime numbers less than a non-negative number, n.

// Example:

// Input: 10
// Output: 4
// Explanation: There are 4 prime numbers less than 10, they are 2, 3, 5, 7.

var countPrimes = function(n) {
  let countArr = [],
    result = 0;
  for (let i = 2; i < n; i++) {
    if (countArr[i] === undefined) {
      countArr[i] = 1;
      result++;
      let j = 2;
      while (i * j < n) {
        countArr[i * j] = 0;
        j++;
      }
    }
  }
  return result;
};

console.log(countPrimes(10));
