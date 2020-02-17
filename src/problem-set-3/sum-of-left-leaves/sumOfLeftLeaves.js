/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var sumOfLeftLeaves = function(root) {
  return dfs(root);
};

const dfs = (root, isLeft) => {
  if (root === null) {
    return 0;
  }
  if (!root.left && !root.right && isLeft) {
    return root.val;
  }
  return dfs(root.left, true) + dfs(root.right);
};
