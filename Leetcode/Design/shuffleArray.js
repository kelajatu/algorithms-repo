// Shuffle a set of numbers without duplicates.

// Example:

// // Init an array with set 1, 2, and 3.
// int[] nums = {1,2,3};
// Solution solution = new Solution(nums);

// // Shuffle the array [1,2,3] and return its result. Any permutation of [1,2,3] must equally likely to be returned.
// solution.shuffle();

// // Resets the array back to its original configuration [1,2,3].
// solution.reset();

// // Returns the random shuffling of array [1,2,3].
// solution.shuffle();

var solution = function(nums) {
  this.nums = nums || [];
};

Solution.prototype.reset = function() {
  return this.nums;
};

Solution.prototype.shuffle = function() {
  var a = [];

  this.nums.forEach((val, key) => (a[key] = val));
  for (var i = 0; i < a.length; i++) {
    var rand = Math.floor(Math.random() * (a.length - i)) + i;
    var temp = a[i];
    a[i] = a[rand];
    a[rand] = temp;
  }
  return a;
};

console.log(solution([]));
