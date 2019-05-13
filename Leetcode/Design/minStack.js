// Design a stack that supports push, pop, top, and retrieving the minimum element in constant time.

// push(x) -- Push element x onto stack.
// pop() -- Removes the element on top of the stack.
// top() -- Get the top element.
// getMin() -- Retrieve the minimum element in the stack.

var MinStack = function() {
  this.stack = [];
  this.min = [];
};

/*
 * @param {number} x
 * @return {void}
 */
MinStack.prototype.push = function(x) {
  this.stack.push(x);

  var min = this.getMin();
  if (min !== undefined) {
    this.min.push(Math.min(x, min));
  } else {
    this.min.push(x);
  }
};

/*
 * @return {void}
 */
MinStack.prototype.pop = function() {
  this.stack.pop();
  this.min.pop();
};

/*
 @return {number}
 */
MinStack.prototype.top = function() {
  if (this.stack.length > 0) {
    return this.stack[this.stack.length - 1];
  }
};

/*
 * @return {number}
 */
MinStack.prototype.getMin = function() {
  if (this.min.length > 0) {
    return this.min[this.min.length - 1];
  }
};
