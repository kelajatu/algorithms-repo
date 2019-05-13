// Write a program that outputs the string representation of numbers from 1 to n.

// But for multiples of three it should output “Fizz” instead of the number and for the multiples of five output “Buzz”. For numbers which are multiples of both three and five output “FizzBuzz”.

var fizzBuzz = function(n) {
  let arr = [];

  for (let i = 1; i <= n; i++) {
    let str = "";
    if (i % 5 === 0) str = "Buzz";
    if (i % 3 === 0) str = "Fizz" + str;
    if (str) arr.push(str);
    else arr.push(i.toString());
  }
  return arr;
};

console.log(fizzBuzz(15));
