// Given two strings s and t , write a function to determine if t is an anagram of s.

// Example 1:

// Input: s = "anagram", t = "nagaram"
// Output: true

const isAnagram = (s, t) => {
  let string1 = s
    .split("")
    .sort()
    .join("")
    .trim();

  let target = t
    .split("")
    .sort()
    .join("")
    .trim();

  return string1 === target;
};

console.log(isAnagram("anagram", "nagaram"));
