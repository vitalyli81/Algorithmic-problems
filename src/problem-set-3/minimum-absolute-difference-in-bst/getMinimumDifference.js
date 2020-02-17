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
var getMinimumDifference = function(root) {
  let min = Infinity;
  let prev = Infinity;

  const dfs = node => {
    if (node === null) return;
    dfs(node.left);
    min = Math.min(min, Math.abs(node.val - prev));
    prev = node.val;
    dfs(node.right);
  };

  dfs(root);
  return min;
};
