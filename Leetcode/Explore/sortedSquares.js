// Given an array of integers A sorted in non-decreasing order, return an array of the squares of each number, also in sorted non-decreasing order.

// Example 1:

// Output: [0,1,9,16,100]
// Input: [-4,-1,0,3,10]

var sortedSquares = function(A) {
  const result = [];
  A.forEach(i => {
    result.push(Math.pow(i, 2));
  });
  return result.sort((a, b) => a - b);
};

console.log(sortedSquares([-7, -3, 2, 3, 11]));
