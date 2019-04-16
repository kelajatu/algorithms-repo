// Given an array of integers, find if the array contains any duplicates.

// Your function should return true if any value appears at least twice in the array, and it should return false if every element is distinct.

// Example 1:

// Input: [1,2,3,1]
// Output: true

var containsDuplicates = function(nums) {
  let newArr = nums.sort();
  for (let i = 0; i < newArr.length; i++) {
    if (newArr[i] === newArr[i + 1]) {
      return true;
    }
  }
  return false;
};

console.log(containsDuplicates([1, 1, 1, 3, 3, 4, 3, 2, 4, 2]));
