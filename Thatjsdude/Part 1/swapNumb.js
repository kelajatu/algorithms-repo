// Question: How would you swap two numbers without using a temporary variable?

// Answer: Waste time about thinking it. though u know the answer, act like you are thinking and take your time to answer this one.

function swapNumb(a, b) {
  b = b - a;
  a = a + b;
  b = a - b;

  return [a, b];
}

console.log(swapNumb(2, 3));
