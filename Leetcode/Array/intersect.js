// Given two arrays, write a function to compute their intersection.

// Example 1:

// Input: nums1 = [1,2,2,1], nums2 = [2,2]
// Output: [2,2]

// Note:

// Each element in the result should appear as many times as it shows in both arrays.
// The result can be in any order.

var intersect = function(nums1, nums2) {
  let i,
    r = [],
    [f, l] = nums1.length < nums2.length ? [nums1, num2] : [nums2, nums1];
  for (let x of f) (i = l.indexOf(x)), ~i && r.push(l.splice(i, 1));
  return r;
};

console.log(intersect([4, 9, 5], [9, 4, 9, 8, 4]));
