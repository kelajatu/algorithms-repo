// Given a string S that only contains "I" (increase) or "D" (decrease), let N = S.length.

// Return any permutation A of [0, 1, ..., N] such that for all i = 0, ..., N-1:

// If S[i] == "I", then A[i] < A[i+1]
// If S[i] == "D", then A[i] > A[i+1]

// Example 1:

// Input: "IDID"
// Output: [0,4,1,3,2]

// Example 2:

// Input: "III"
// Output: [0,1,2,3]

var diStringMatch = function(S) {
  let arr = [],
    des = [];

  for (let i = 0; i <= S.length; i++) {
    arr.push(i);
  }
  for (let i = 0; i <= S.length; i++) {
    if (S[i] === "I") {
      des.push(arr.shift());
    } else {
      des.push(arr.pop());
    }
  }
  return des;
};

console.log(diStringMatch("IDID"));
