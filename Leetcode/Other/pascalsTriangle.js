// Given a non-negative integer numRows, generate the first numRows of Pascal's triangle.

// In Pascal's triangle, each number is the sum of the two numbers directly above it.

// Example:

// Input: 5
// Output:
// [
//      [1],
//     [1,1],
//    [1,2,1],
//   [1,3,3,1],
//  [1,4,6,4,1]
// ]

var generate = function(numRows) {
  if (!numRows || numRows <= 0) return [];

  const pascal = [[1]];

  for (let i = 1; i < numRows; i++) {
    const prevRow = pascal[pascal.length - 1];
    const shiftLeft = [...prevRow, 0];
    const shiftRight = [0, ...prevRow];

    const currentRow = shiftLeft.map((r, i) => r + shiftRight[i]);
    pascal.push(currentRow);
  }

  return pascal;
};

console.log(generate(5));

