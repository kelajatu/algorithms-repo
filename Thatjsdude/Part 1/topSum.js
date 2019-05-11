// Question: How would you find the largest sum of any two elements?

// Answer: this is actually very simple and straight forward. Just find the two largest number and return sum of them

function topSum(arr) {
  var biggest = arr[0],
    second = arr[1];

  if (arr.length < 2) return null;
  if (biggest < second) {
    biggest = arr[1];
    second = arr[0];
  }

  for (let i = 2; i < arr.length; i++) {
    if (arr[i] > biggest) {
      second = biggest;
      biggest = arr[i];
    } else if (arr[i] > second) {
      second = arr[i];
    }
  }
  return biggest + second;
}

console.log(topSum([4, 9, 3, 20]));
// console.log(topSum([1]));
