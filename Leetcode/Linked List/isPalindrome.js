// Given a singly linked list, determine if it is a palindrome.

// Example 1:

// Input: 1->2
// Output: false
// Example 2:

// Input: 1->2->2->1
// Output: true
// Follow up:
// Could you do it in O(n) time and O(1) space?

var isPalindrome = function(head) {
  let first = "";
  let second = "";
  while (head) {
    first = first + head.val;
    second = head.val + second;
    head = head.next;
  }
  return first === second;
};
