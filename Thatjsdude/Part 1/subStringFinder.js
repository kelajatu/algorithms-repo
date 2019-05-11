// Question: How can you match substring of a sting?

// Answer: Will use to pointer (one for string and another for the substring) while iterating the string. And will have another variable to hold the starting index of the initial match.

function subStringFinder(str, subStr) {
  var idx = 0,
    j = 0;

  for (i = 0; i < str.length; i++) {
    if (str[i] === subStr[j]) {
      j++;
    } else {
      j = 0;
    }
    if (j === 0) {
      idx = i;
    } else if (j === subStr.length) {
      return idx;
    }
  }
  return -1;
}

console.log(subStringFinder("abbcdabbbbbck", "ab"));
