// Given two arrays arr1 and arr2, the elements of arr2 are distinct, and all elements in arr2 are also in arr1.

// Sort the elements of arr1 such that the relative ordering of items in arr1 are the same as in arr2.  Elements that don't appear in arr2 should be placed at the end of arr1 in ascending order.

// Example 1:

// Input: arr1 = [2,3,1,3,2,4,6,7,9,2,19], arr2 = [2,1,4,3,9,6]
// Output: [2,2,2,1,4,3,3,9,6,7,19]

var relativeSortArray = function(arr1, arr2) {
  let distinct = [];

  for (let i = 0; i < arr2.length; i++) {
    let current = arr2[i];
    for (let j = 0; j < arr1.length; j++) {
      if (arr1[j] === current) {
        distinct.push(current);
      }
    }
    arr1 = arr1.filter(x => x != current);
  }
  if (arr1.length > 0) {
    distinct = distinct.concat(arr1.sort((a, b) => a - b));
  }
  return distinct;
};

console.log(
  relativeSortArray([2, 3, 1, 3, 2, 4, 6, 7, 9, 2, 19], [2, 1, 4, 3, 9, 6])
);
