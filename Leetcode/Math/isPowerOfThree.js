// Given an integer, write a function to determine if it is a power of three.

// Example 1:

// Input: 27
// Output: true
// Example 2:

// Input: 0
// Output: false

var isPowerOfThree = function(n) {
  if (n < 0) return false;
  if (check(n)) {
    return true;
  }
  return false;
};

function check(n) {
  return 1162261467 % n === 0;
}

console.log(isPowerOfThree(27));
