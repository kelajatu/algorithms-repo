// Determine whether an integer is a palindrome. An integer is a palindrome when it reads the same backward as forward.

// Example 1:

// Input: 121
// Output: true
// Example 2:

// Input: -121
// Output: false
// Explanation: From left to right, it reads -121. From right to left, it becomes 121-. Therefore it is not a palindrome.
// Example 3:

// Input: 10
// Output: false
// Explanation: Reads 01 from right to left. Therefore it is not a palindrome.
// Follow up:

var isPalindrome = function(x) {
  if (x < 0 || (x % 10 === 0 && x !== 0)) return false;

  let revertedNum = 0;
  while (x > revertedNum) {
    revertedNum *= 10;
    revertedNum += x % 10;
    x = Math.trunc(x / 10);
  }
  return x == revertedNum || Math.trunc(revertedNum / 10) === x;
};

console.log(isPalindrome(121));
