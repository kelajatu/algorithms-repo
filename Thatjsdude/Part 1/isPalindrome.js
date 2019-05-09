// Question: How will you verify a word as palindrome?

// Answer: if you reverse a word and it becomes same as the previous word, it is called palindrome.

function isPalindrome(str) {
  return (
    str ===
    str
      .split("")
      .reverse()
      .join("")
  );
}

console.log(isPalindrome("madam"));
