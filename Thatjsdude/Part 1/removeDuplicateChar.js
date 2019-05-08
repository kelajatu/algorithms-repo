// Question: How will you remove duplicate characters from a sting?

// You: This is very similar to first non repeating char. You will asks similar question. Is it case sensitive.

// If interviewer says, this is case sensitive then life become easier you. If he says no. you can either use string.toLowercase() to make whole string lower. he might not like it. because return string will not posses the same case. So

function removeDuplicateChar(str) {
  var newStr = [],
    charCount = {};

  for (var i = 0; i < str.length; i++) {
    if (charCount[str[i]]) {
      charCount[str[i]]++;
    } else {
      charCount[str[i]] = 1;
    }
  }
  for (var j in charCount) {
    if (charCount[j] == 1) {
      newStr.push(j);
    }
  }
  return newStr.join("");
}

console.log(removeDuplicateChar("Learn more javascript dude"));
