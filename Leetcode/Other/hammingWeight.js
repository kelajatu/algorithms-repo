// Write a function that takes an unsigned integer and return the number of '1' bits it has (also known as the Hamming weight).

// Example 1:

// Input: 00000000000000000000000000001011
// Output: 3
// Explanation: The input binary string 00000000000000000000000000001011 has a total of three '1' bits.

var hammingWeight = function(n) {
  return n
    .toString(2)
    .split("0")
    .join("").length;
};

console.log(hammingWeight(0000000000000000000000000001011));
