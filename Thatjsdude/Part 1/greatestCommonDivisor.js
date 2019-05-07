// Question: How would you find the greatest common divisor of two numbers?

function greatestCommonDivisor(a, b) {
  var divisor = 2,
    greatestDivisor = 1;

  if (a < 2 || b < 2) return 1;

  while (a >= divisor && b >= divisor) {
    if (a % divisor === 0 && b % divisor === 0) {
      greatestDivisor = divisor;
    }
    divisor++;
  }
  return greatestDivisor;
}

// // Fancy Solution
// function greatestCommonDivisor(a, b) {
//   if (b === 0) return a;
//   return greatestCommonDivisor(b, a % b);
// }

console.log(greatestCommonDivisor(14, 21));
