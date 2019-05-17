// Question: How could you implement cache to save calculation time for a recursive fibonacci function?

// Answer: You could use poor man's memoization with a global variable. If fibonacci is already calculated it is served from the global memo array otherwise it is calculated.

var memo = [];

function fibonacci(n) {
  if (memo[n]) {
    return memo[n];
  } else if (n < 2) {
    return 1;
  } else {
    fibonacci(n - 2) + fibonacci(n - 1);
  }
}

console.log(fibonacci(10));
