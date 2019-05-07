// Given a binary tree, determine if it is a valid binary search tree (BST).

// Assume a BST is defined as follows:

// The left subtree of a node contains only nodes with keys less than the node's key.
// The right subtree of a node contains only nodes with keys greater than the node's key.
// Both the left and right subtrees must also be binary search trees.

// Example 1:

//     2
//    / \
//   1   3

// Input: [2,1,3]
// Output: true

var isValidBST = function(root, upperBound = Infinity, lowerBound = -Infinity) {
  if (!root) return true;
  if (root.val >= upperBound || root.val <= lowerBound) return false;
  return (
    isValidBST(root.left, Math.min(upperBound, root.val), lowerBound) &&
    isValidBST(root.right, upperBound, Math.max(lowerBound, root.val))
  );
};

console.log(isValidBST([2, 1, 3]));
