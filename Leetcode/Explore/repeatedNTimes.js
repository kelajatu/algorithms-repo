// In a array A of size 2N, there are N+1 unique elements, and exactly one of these elements is repeated N times.

// Return the element repeated N times.

// Example 1:

// Input: [1,2,3,3]
// Output: 3

var repeatedNTimes = function(A) {
  let sortedArr = A.sort();
  for (let i = 0; i < sortedArr.length; i++) {
    if (sortedArr[i] === sortedArr[i + 1]) {
      return sortedArr[i];
    }
  }
  //   return sortedArr;
};

console.log(repeatedNTimes([1, 5, 2, 3, 3]));
