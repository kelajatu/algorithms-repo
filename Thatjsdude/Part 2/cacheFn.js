// Question: How could you cache execution of any function?

// Answer: You could have a method where you will pass a function and it will internally maintain a cache object where calculated value will be cached. When you will call the function with same argument, the cached value will be served.

function cacheFn(fn) {
  var cache = {};
  return function(arg) {
    if (cache[arg]) {
      return cache[arg];
    } else {
      cache[arg] = fn(arg);
      return cache[arg];
    }
  };
}
