// Question: If you have a string like "I am the good boy". How can you generate "I ma eht doog yob"? Please note that the words are in place but reverse.

// Answer: To do this, i have to do both string reverse and word reverse.

function reverseInPlace(str) {
  return str
    .split(" ")
    .reverse()
    .join(" ")
    .split("")
    .reverse()
    .join("");
}

console.log(reverseInPlace("I am the good boy"));
