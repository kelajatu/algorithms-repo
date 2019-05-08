// Question: How would you reverse a string in JavaScript?

// Answer: I can loop through the string and concatenate letters to a new string

function reverse(str) {
  if (!str || str.length < 2) return str;
  return str
    .split("")
    .reverse()
    .join("");
}

console.log(reverse("you are a nice dude"));
