// Students are asked to stand in non-decreasing order of heights for an annual photo.

// Return the minimum number of students not standing in the right positions.  (This is the number of students that must move in order for all students to be standing in non-decreasing order of height.)

// Example 1:

// Input: [1,1,4,2,1,3]
// Output: 3
// Explanation:
// Students with heights 4, 3 and the last 1 are not standing in the right positions.

var heightChecker = function(arr) {
  let sorted = [...arr].sort((a, b) => a - b);
  let count = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] !== sorted[i]) {
      count += 1;
    }
  }
  return count;
};

console.log(heightChecker([1, 1, 4, 2, 1, 3]));
