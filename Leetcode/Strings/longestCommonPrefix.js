// Write a function to find the longest common prefix string amongst an array of strings.

// If there is no common prefix, return an empty string "".

// Example 1:

// Input: ["flower","flow","flight"]
// Output: "fl"
// Example 2:

// Input: ["dog","racecar","car"]
// Output: ""
// Explanation: There is no common prefix among the input strings.
// Note:

// All given inputs are in lowercase letters a-z.

const longestCommonPrefix = str => {
  if (!str.length) return "";

  for (let i = 0; i < str[0].length; i++) {
    for (let s of str) {
      if (s[i] !== str[0][i]) {
        return s.slice(0, i);
      }
    }
  }
  return str[0];
};

console.log(longestCommonPrefix(["flower", "flow", "flight"]));
