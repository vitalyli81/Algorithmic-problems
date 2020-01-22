/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} s
 * @param {TreeNode} t
 * @return {boolean}
 */
var isSubtree = function(s, t) {
  if (s === null) return true;
  return subTree(s, t);
};

const subTree = (t1, t2) => {
  if (t1 === null) return false;

  if (t1.val === t2.val && matchTree(t1, t2)) {
    return true;
  }

  return subTree(t1.left, t2) || subTree(t1.right, t2);
};

const matchTree = (t1, t2) => {
  if (t1 === null && t2 === null) {
    return true;
  } else if (t1 === null || t2 === null) {
    return false;
  } else if (t1.val !== t2.val) {
    return false;
  } else {
    return matchTree(t1.right, t2.right) && matchTree(t1.left, t2.left);
  }
};
