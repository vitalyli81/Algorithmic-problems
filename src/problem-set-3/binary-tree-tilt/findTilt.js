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
var findTilt = function(root) {
  const tilt = { val: 0 };
  dfs(root, tilt);
  return tilt.val;
};

const dfs = (root, tilt) => {
  if (root === null) return 0;
  const l = dfs(root.left, tilt);
  const r = dfs(root.right, tilt);
  tilt.val += Math.abs(l - r);
  return r + l + root.val;
};
