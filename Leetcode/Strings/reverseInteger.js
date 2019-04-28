// Given a 32-bit signed integer, reverse digits of an integer.

// Example 1:

// Input: 123
// Output: 321
// Example 2:

// Input: -123
// Output: -321

const reverse = x => {
  const reversed =
    parseInt(
      Math.abs(x)
        .toString()
        .split("")
        .reverse()
        .join("")
    ) * Math.sign(x);
  return reversed <= 0x7fffffff && reversed >= -0x80000000 ? reversed : 0;
};

console.log(reverse(-120));
