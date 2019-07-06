// A self-dividing number is a number that is divisible by every digit it contains.

// For example, 128 is a self-dividing number because 128 % 1 == 0, 128 % 2 == 0, and 128 % 8 == 0.

// Also, a self-dividing number is not allowed to contain the digit zero.

// Given a lower and upper number bound, output a list of every possible self dividing number, including the bounds if possible.

// Example 1:
// Input:
// left = 1, right = 22
// Output: [1, 2, 3, 4, 5, 6, 7, 8, 9, 11, 12, 15, 22]

var selfDividingNumbers = function(left, right) {
  let r, d;
  const nums = [];

  for (let num = left; num <= right; num += 1) {
    d = num;
    r = num % 10;
    while (r && !(num % r)) {
      d = Math.floor(d / 10);
      r = d % 10;
    }
    if (d === 0) nums.push(num);
  }
  return nums;
};

console.log(selfDividingNumbers(1, 2));
