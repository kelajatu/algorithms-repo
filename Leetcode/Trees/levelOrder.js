// Given a binary tree, return the level order traversal of its nodes' values. (ie, from left to right, level by level).

// For example:
// Given binary tree [3,9,20,null,null,15,7],

// 3
// / \
// 9  20
//  /  \
// 15   7
// return its level order traversal as:

// [
// [3],
// [9,20],
// [15,7]
// ]

var levelOrder = function(root) {
  const arr = [];
  function traverse(node, level) {
    if (!node) return;
    if (arr.length <= level) arr.push([]);
    arr[level].push(node.val);
    traverse(node.left, level + 1);
    traverse(node.right, level + 1);
  }
  traverse(root, 0);
  return arr;
};
