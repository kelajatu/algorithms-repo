// Given a binary tree, check whether it is a mirror of itself (ie, symmetric around its center).

// For example, this binary tree [1,2,2,3,4,4,3] is symmetric:

//     1
//    / \
//   2   2
//  / \ / \
// 3  4 4  3

// But the following [1,2,2,null,3,null,3] is not:

//     1
//    / \
//   2   2
//    \   \
//    3    3

var isSymmetric = function(root) {
  if (!root) return true;

  function isMirror(s, t) {
    if (!s && !t) return true;

    if (!s || !t || s.val !== t.val) return false;
    return isMirror(s.left, t.right) && isMirror(s.right, t.left);
  }
  return isMirror(root.left, root.right);
};
